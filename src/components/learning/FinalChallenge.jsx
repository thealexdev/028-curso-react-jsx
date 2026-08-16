/* eslint-disable react/prop-types */
import { CodeExercise } from '../exercises/CodeExercise';

export const FinalChallenge = ({ challenge, completed, onComplete }) => <section className="border-t-4 border-slate-950 py-14" id="reto-final">
    <div className="rounded-2xl bg-slate-950 p-6 text-slate-100 sm:p-9">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">Reto final del bloque</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">{challenge.title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{challenge.summary}</p>
        <h3 className="mt-7 font-bold">Criterios de terminado</h3>
        <ul className="mt-3 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
            {challenge.requirements.map(requirement => <li key={requirement}>[ ] {requirement}</li>)}
        </ul>
        {completed && <p className="mt-6 rounded-lg bg-emerald-400 px-4 py-3 font-bold text-emerald-950">Reto completado. Ya puedes explicar y mejorar tu solución.</p>}
    </div>
    <CodeExercise exercise={challenge.exercise} onComplete={onComplete} />
</section>;
