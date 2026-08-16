/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CodeExercise } from './CodeExercise';

export const PracticeSet = ({ lesson, completedExercises, onComplete }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const exercise = lesson.exercises[activeIndex];

    return (
        <section className="mt-8" aria-labelledby={`${lesson.id}-practice`}>
            <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">Práctica deliberada</p>
                    <h3 className="mt-1 text-2xl font-black" id={`${lesson.id}-practice`}>Hazlo paso a paso</h3>
                    <p className="mt-2 max-w-2xl text-slate-600">No avances por rapidez: explica qué hace tu código antes de comprobarlo.</p>
                </div>
                <p className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-800">{completedExercises.length} de {lesson.exercises.length} completados</p>
            </div>
            <ol className="mt-5 grid gap-2 sm:grid-cols-4">
                {lesson.exercises.map((item, index) => {
                    const complete = completedExercises.includes(item.id);
                    const active = activeIndex === index;
                    return <li key={item.id}><button className={`w-full rounded-lg border px-3 py-3 text-left text-sm transition ${active ? 'border-indigo-700 bg-indigo-700 text-white' : complete ? 'border-emerald-300 bg-emerald-50 text-emerald-900' : 'border-slate-300 bg-white text-slate-700 hover:border-indigo-300'}`} onClick={() => setActiveIndex(index)} type="button"><span className="block font-mono text-xs opacity-80">{complete ? 'COMPLETADO' : `EJERCICIO ${index + 1}`}</span><span className="mt-1 block font-bold">{item.level}</span></button></li>;
                })}
            </ol>
            <CodeExercise exercise={exercise} key={exercise.id} onComplete={() => onComplete(exercise.id)} />
        </section>
    );
};
