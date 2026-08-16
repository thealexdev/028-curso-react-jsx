/* eslint-disable react/prop-types */
export const Explanation = ({ lesson }) => {
    return (
        <>
            <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_16rem]">
                <div>
                    <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">{lesson.number} / {lesson.category ?? 'Fundamentos'}</p>
                    <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{lesson.title}</h2>
                    <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{lesson.summary}</p>
                </div>
                <div className="rounded-xl bg-slate-900 p-5 text-slate-100">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-300">Como estudiar</p>
                    <p className="mt-3 text-sm leading-6">Lee los conceptos, analiza el ejemplo y modifica el reto hasta que puedas explicar cada decisión.</p>
                </div>
            </div>

            <section className="mt-8 max-w-3xl" aria-labelledby={`${lesson.id}-goal`}>
                <h3 className="text-lg font-bold" id={`${lesson.id}-goal`}>Al terminar podrás</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                    {lesson.objectives.map(objective => <li className="flex gap-2" key={objective}><span className="font-bold text-indigo-700">-</span>{objective}</li>)}
                </ul>
            </section>

            <section className="mt-8 max-w-3xl" aria-labelledby={`${lesson.id}-explanation`}>
                <h3 className="text-lg font-bold" id={`${lesson.id}-explanation`}>Antes de escribir código</h3>
                <div className="mt-3 space-y-3 leading-7 text-slate-700">
                    {lesson.explanation.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                </div>
            </section>

            <section className="mt-8" aria-labelledby={`${lesson.id}-concepts`}>
                <h3 className="text-lg font-bold" id={`${lesson.id}-concepts`}>Conceptos clave</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {lesson.concepts.map(([term, description]) => (
                        <article className="rounded-lg border border-slate-200 bg-white p-4" key={term}>
                            <h4 className="font-mono text-sm font-bold text-indigo-700">{term}</h4>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mt-8" aria-labelledby={`${lesson.id}-example`}>
                <h3 className="text-lg font-bold" id={`${lesson.id}-example`}>Ejemplo guiado</h3>
                <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm leading-6 text-slate-100"><code>{lesson.example}</code></pre>
            </section>

            <section className="mt-8 max-w-3xl rounded-xl border border-amber-200 bg-amber-50 p-5" aria-labelledby={`${lesson.id}-mistakes`}>
                <h3 className="font-bold text-amber-950" id={`${lesson.id}-mistakes`}>Errores frecuentes</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-900">
                    {lesson.commonMistakes.map(mistake => <li key={mistake}>- {mistake}</li>)}
                </ul>
            </section>
        </>
    );
};
