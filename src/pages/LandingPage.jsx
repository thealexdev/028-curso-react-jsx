import { courseBlocks } from '../data/courseBlocks';
import { SiteFooter } from '../components/layout/SiteFooter';

export const LandingPage = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <header className="border-b border-white/10">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
                    <a className="font-mono text-sm font-bold uppercase tracking-[0.2em]" href="/">
                        React / Ruta
                    </a>
                    <a className="rounded-full border border-indigo-400/60 px-4 py-2 text-sm font-semibold text-indigo-200 transition hover:bg-indigo-400 hover:text-slate-950" href="#bloques">
                        Ver bloques
                    </a>
                </div>
            </header>

            <main>
                <section className="relative overflow-hidden border-b border-white/10">
                    <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />
                    <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
                    <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:py-28 lg:grid-cols-[1.4fr_0.8fr]">
                        <div>
                            <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Curso practico de React</p>
                            <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Aprende React desde los cimientos.</h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Una ruta de aprendizaje para entender la web, dominar JavaScript y construir interfaces con React. Sin saltar conceptos esenciales.</p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <a className="rounded-md bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-200" href="/bloque-1">Comenzar Bloque 1</a>
                                <a className="rounded-md border border-white/20 px-5 py-3 font-semibold transition hover:border-white/50 hover:bg-white/10" href="#bloques">Explorar temario</a>
                            </div>
                        </div>
                        <aside className="self-end rounded-2xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur">
                            <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300">Tu primer paso</p>
                            <p className="mt-4 text-3xl font-bold">Fundamentos Web</p>
                            <ul className="mt-5 space-y-3 text-slate-300">
                                <li>HTML con significado</li>
                                <li>Layouts responsive</li>
                                <li>JavaScript moderno</li>
                                <li>Ejercicios dentro de la pagina</li>
                            </ul>
                        </aside>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24" id="bloques">
                    <div className="flex flex-col justify-between gap-4 border-b border-white/15 pb-7 sm:flex-row sm:items-end">
                        <div>
                            <p className="font-mono text-sm uppercase tracking-[0.18em] text-cyan-300">Temario</p>
                            <h2 className="mt-2 text-4xl font-bold tracking-tight">Elige tu bloque</h2>
                        </div>
                        <p className="max-w-md text-slate-400">Avanza en orden. Cada bloque prepara los conceptos del siguiente.</p>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {courseBlocks.map(block => (
                            <article className="rounded-xl border border-cyan-300/50 bg-cyan-300/10 p-6 transition hover:-translate-y-1 hover:border-cyan-200" key={block.number}>
                                <div className="flex items-start justify-between gap-4"><span className="font-mono text-lg text-cyan-300">{String(block.number).padStart(2, '0')}</span><span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">Disponible</span></div>
                                <h3 className="mt-8 text-2xl font-bold">{block.title}</h3>
                                <p className="mt-2 min-h-12 text-slate-300">{block.description}</p>
                                <a className="mt-6 inline-flex font-semibold text-cyan-300 hover:text-cyan-100" href={`/bloque-${block.number}`}>Entrar al bloque <span aria-hidden="true">&rarr;</span></a>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <SiteFooter dark />
        </div>
    );
};
