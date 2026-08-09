import { courseBlocks } from '../data/courseBlocks';

export const CourseBlock = () => {
    const blockNumber = Number(window.location.pathname.split('/').pop());
    const block = courseBlocks.find(item => item.number === blockNumber);
    const previousBlock = courseBlocks[blockNumber - 2];
    const nextBlock = courseBlocks[blockNumber];

    if (!block) return null;

    return (
        <div className="min-h-screen bg-stone-100 text-slate-900">
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
                    <a className="font-mono text-sm font-bold uppercase tracking-[0.2em]" href="/">React / Ruta</a>
                    <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-900" href="/#bloques">Todos los bloques</a>
                </div>
            </header>
            <main className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
                <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Bloque {String(block.number).padStart(2, '0')} de 13</p>
                <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">{block.title}</h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{block.description}</p>

                <section className="mt-12 rounded-2xl border border-slate-300 bg-white p-6 shadow-sm sm:p-8">
                    <h2 className="text-2xl font-bold">Temario del bloque</h2>
                    <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                        {block.topics.map((topic, index) => <li className="flex gap-3 rounded-lg bg-slate-50 p-4" key={topic}><span className="font-mono text-sm text-indigo-700">{String(index + 1).padStart(2, '0')}</span><span>{topic}</span></li>)}
                    </ol>
                </section>

                <nav aria-label="Navegacion entre bloques" className="mt-8 flex flex-wrap justify-between gap-4">
                    {previousBlock ? <a className="button-secondary" href={`/bloque-${previousBlock.number}`}>Anterior: {previousBlock.title}</a> : <span />}
                    {nextBlock ? <a className="button-primary" href={`/bloque-${nextBlock.number}`}>Siguiente: {nextBlock.title}</a> : <a className="button-primary" href="/">Volver al inicio</a>}
                </nav>
            </main>
        </div>
    );
};
