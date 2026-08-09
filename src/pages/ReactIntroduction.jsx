import { CodeExercise } from '../components/exercises/CodeExercise';
import { Explanation } from '../components/learning/Explanation';
import { reactIntroductionLessons } from '../data/reactIntroductionLessons';

export const ReactIntroduction = () => {
    return (
        <div className="min-h-screen bg-stone-100 text-slate-900">
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5">
                    <a className="font-mono text-sm font-bold uppercase tracking-[0.2em]" href="/">React / Ruta</a>
                    <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-900" href="/#bloques">Todos los bloques</a>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
                <section className="border-b border-slate-300 pb-10">
                    <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Bloque 02 de 13</p>
                    <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-7xl">Introduccion a React</h1>
                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Aprende cómo React organiza una interfaz mediante componentes y JSX. Cada lección contiene documentación, un ejemplo y un reto de código editable con CodeMirror.</p>
                    <div className="mt-7 flex flex-wrap gap-3 text-sm"><span className="rounded-full bg-indigo-100 px-3 py-1 font-medium text-indigo-800">9 lecciones</span><span className="rounded-full bg-indigo-100 px-3 py-1 font-medium text-indigo-800">9 retos JSX</span><span className="rounded-full bg-indigo-100 px-3 py-1 font-medium text-indigo-800">CodeMirror</span></div>
                </section>

                <div className="mt-10 lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-12">
                    <aside className="mb-8 lg:mb-0">
                        <nav aria-label="Indice del Bloque 2" className="sticky top-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-slate-500">En esta página</p>
                            <ol className="space-y-1">
                                {reactIntroductionLessons.map(lesson => <li key={lesson.id}><a className="block rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-800" href={`#${lesson.id}`}><span className="mr-2 font-mono text-xs text-indigo-600">{lesson.number}</span>{lesson.title}</a></li>)}
                            </ol>
                        </nav>
                    </aside>

                    <div>
                        {reactIntroductionLessons.map((lesson, index) => (
                            <section className={index ? 'border-t border-slate-300 py-14' : 'pb-14'} id={lesson.id} key={lesson.id}>
                                <Explanation lesson={lesson} />
                                <CodeExercise exercise={lesson.exercise} />
                            </section>
                        ))}
                    </div>
                </div>
            </main>
            <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500">Al terminar podrás crear, estructurar y leer una interfaz React básica. Continúa con el Bloque 3: Props y Comunicación.</footer>
        </div>
    );
};
