/* eslint-disable react/prop-types */
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';

const languageExtensions = {
    html: [html()],
    css: [css()],
    javascript: [javascript()],
    jsx: [javascript({ jsx: true })],
};

const escapeClosingScript = code => code.replace(/<\/script/gi, '<\\/script');

const matchesPattern = (code, pattern) => {
    // Lesson data is plain text, so restore whitespace tokens before compiling it.
    const normalizedPattern = pattern.replace(/s([*+?])/g, '\\s$1');

    try {
        return new RegExp(normalizedPattern, 'i').test(code);
    } catch {
        return code.includes(pattern);
    }
};

const consoleBridge = `
<script>
  const output = document.querySelector('#console-output');
  const write = (type, values) => {
    const line = document.createElement('div');
    line.className = type;
    line.textContent = values.map(value => typeof value === 'object' ? JSON.stringify(value) : String(value)).join(' ');
    output.append(line);
  };
  ['log', 'error', 'warn'].forEach(type => {
    const original = console[type];
    console[type] = (...values) => { write(type, values); original(...values); };
  });
  window.addEventListener('error', event => write('error', [event.message]));
</script>`;

const documentFor = exercise => {
    const baseStyles = `
      <style>
        * { box-sizing: border-box; } body { margin: 0; padding: 20px; font: 16px/1.5 system-ui, sans-serif; color: #172033; background: #f8fafc; }
        .site-header, .site-footer { padding: 12px; background: #172033; color: white; } .content { padding: 16px 0; } .post { padding: 16px; border: 1px solid #cbd5e1; border-radius: 8px; background: white; }
        .cards article { padding: 16px; border-radius: 8px; background: #fcd34d; font-weight: 700; } button { border: 0; border-radius: 6px; padding: 10px 14px; background: #4f46e5; color: white; cursor: pointer; } #console-output { margin-top: 16px; padding: 12px; min-height: 48px; border-radius: 8px; background: #111827; color: #e2e8f0; font: 13px/1.5 ui-monospace, monospace; white-space: pre-wrap; } .error { color: #fda4af; } .warn { color: #fcd34d; }
      </style>`;

    if (exercise.language === 'html') {
        return `<!doctype html><html><head>${baseStyles}</head><body>${exercise.initialCode}</body></html>`;
    }

    if (exercise.language === 'css') {
        return `<!doctype html><html><head>${baseStyles}<style>${exercise.initialCode}</style></head><body>${exercise.preview}</body></html>`;
    }

    return `<!doctype html><html><head>${baseStyles}</head><body>${exercise.preview ?? ''}<div id="console-output">Salida de consola:</div>${consoleBridge}<script>${escapeClosingScript(exercise.initialCode)}</script></body></html>`;
};

export const CodeExercise = ({ exercise, onComplete }) => {
    const [code, setCode] = useState(exercise.initialCode);
    const [executedCode, setExecutedCode] = useState(exercise.initialCode);
    const [result, setResult] = useState(null);
    const [showHint, setShowHint] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const [runVersion, setRunVersion] = useState(0);

    const evaluate = () => {
        const completed = exercise.patterns.every(pattern => matchesPattern(code, pattern));
        if (completed) onComplete?.();
        setResult(
            completed
                ? { type: 'success', message: 'Buen trabajo. Cumpliste los criterios de esta práctica. Ejecuta el código y explica por qué funciona.' }
                : { type: 'error', message: 'Aún faltan partes de la solución. Usa la pista y vuelve a comprobar.' },
        );
    };

    const runCode = () => {
        setExecutedCode(code);
        setRunVersion(version => version + 1);
        setResult(null);
    };

    const restoreInitial = () => {
        setCode(exercise.initialCode);
        setExecutedCode(exercise.initialCode);
        setShowSolution(false);
        setResult(null);
    };

    const applySolution = () => {
        setCode(exercise.solution);
        setExecutedCode(exercise.solution);
        setShowSolution(true);
        setResult(null);
    };

    const previewExercise = { ...exercise, initialCode: executedCode };

    return (
        <section className="mt-8 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">{exercise.level ?? 'Ejercicio'} / {exercise.language}</p>
                <h3 className="mt-1 text-xl font-bold">{exercise.title}</h3>
                <p className="mt-2 text-slate-600">{exercise.instructions}</p>
            </div>
            <div className="grid lg:grid-cols-2">
                <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
                    <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wide text-slate-500">Editor CodeMirror</p>
                    <CodeMirror
                        aria-label={`Editor para ${exercise.title}`}
                        basicSetup={{ lineNumbers: true, foldGutter: false, highlightActiveLine: true }}
                        className="overflow-hidden rounded-lg border border-slate-800 text-sm"
                        extensions={languageExtensions[exercise.language]}
                        height="320px"
                        onChange={setCode}
                        theme="dark"
                        value={code}
                    />
                    <div className="mt-4 flex flex-wrap gap-2">
                        {exercise.execution !== 'validation' && <button className="button-primary" onClick={runCode} type="button">Ejecutar</button>}
                        <button className="button-success" onClick={evaluate} type="button">Comprobar</button>
                        <button className="button-secondary" onClick={() => setShowHint(value => !value)} type="button">{showHint ? 'Ocultar pista' : 'Ver pista'}</button>
                        <button className="button-secondary" onClick={restoreInitial} type="button">Restaurar</button>
                        <button className="button-secondary" onClick={() => (showSolution ? setShowSolution(false) : applySolution())} type="button">{showSolution ? 'Ocultar solución' : 'Ver solución'}</button>
                    </div>
                    {result && <p className={`mt-4 rounded-lg p-3 text-sm ${result.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>{result.message}</p>}
                    {showHint && <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-900"><strong>Pista:</strong> {exercise.hint}</p>}
                    {showSolution && <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-100 p-4 text-sm"><code>{exercise.solution}</code></pre>}
                </div>
                <div className="p-5">
                    {exercise.execution === 'validation' ? (
                        <div className="flex h-80 flex-col justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6">
                            <p className="font-mono text-xs font-bold uppercase tracking-wide text-indigo-700">Validacion de estructura</p>
                            <h4 className="mt-3 text-xl font-bold">Este reto necesita React y Vite</h4>
                            <p className="mt-3 leading-7 text-slate-600">Usa “Comprobar” para validar los conceptos. Copia el código en un proyecto Vite para ejecutarlo con React.</p>
                        </div>
                    ) : (
                        <>
                            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wide text-slate-500">Vista previa aislada</p>
                            <iframe className="h-80 w-full rounded-lg border border-slate-300 bg-white" key={runVersion} sandbox="allow-scripts" srcDoc={documentFor(previewExercise)} title={`Resultado de ${exercise.title}`} />
                            <p className="mt-3 text-xs leading-5 text-slate-500">El código se ejecuta en un iframe aislado y no puede acceder a la aplicación principal.</p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};
