import { useState } from 'react';
import { addTopic, profileSummary } from '../lib/fundamentals';

const initialTopics = [
    { id: 'html', name: 'HTML semantico', completed: false },
    { id: 'css', name: 'CSS moderno', completed: false },
];

const blocks = [
    ['01', 'HTML semantico'],
    ['02', 'CSS moderno'],
    ['03', 'JavaScript moderno'],
    ['04', 'Destructuring y modulos'],
    ['05', 'Promesas y APIs'],
    ['06', 'DOM y eventos'],
];

export const FundamentalsWeb = () => {
    const [layout, setLayout] = useState('grid');
    const [topics, setTopics] = useState(initialTopics);
    const [topicName, setTopicName] = useState('');
    const [profile, setProfile] = useState({
        name: 'Alex',
        role: 'desarrollo web',
        city: 'Madrid',
    });
    const [user, setUser] = useState(null);
    const [requestStatus, setRequestStatus] = useState('idle');
    const [eventMessage, setEventMessage] = useState('Aun no hay eventos.');
    const [draft, setDraft] = useState('');

    const addNewTopic = event => {
        event.preventDefault();

        if (!topicName.trim()) return;

        setTopics(currentTopics => addTopic(currentTopics, topicName));
        setTopicName('');
    };

    const toggleTopic = id => {
        setTopics(currentTopics =>
            currentTopics.map(topic =>
                topic.id === id
                    ? { ...topic, completed: !topic.completed }
                    : topic,
            ),
        );
    };

    const updateProfile = event => {
        const { name, value } = event.target;
        setProfile(currentProfile => ({ ...currentProfile, [name]: value }));
    };

    const loadUser = async () => {
        setRequestStatus('loading');
        setUser(null);

        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users/1',
            );

            if (!response.ok) throw new Error('No se pudo cargar el usuario.');

            setUser(await response.json());
            setRequestStatus('success');
        } catch {
            setRequestStatus('error');
        }
    };

    const submitEvent = event => {
        event.preventDefault();
        setEventMessage(
            draft.trim()
                ? `Formulario enviado con: ${draft}`
                : 'Escribe un mensaje antes de enviar.',
        );
    };

    return (
        <div className="min-h-screen bg-stone-100 text-slate-900">
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-5">
                    <a className="font-mono text-sm font-bold uppercase tracking-[0.2em]" href="/">
                        Web Lab / 01
                    </a>
                    <nav aria-label="Bloques del curso" className="hidden gap-4 text-sm md:flex">
                        {blocks.map(([, title], index) => (
                            <a className="text-slate-500 hover:text-indigo-700" href={`#bloque-${index + 1}`} key={title}>
                                {String(index + 1).padStart(2, '0')}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            <main id="inicio" className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
                <section className="grid gap-8 border-b border-slate-300 pb-12 md:grid-cols-[1.5fr_1fr]">
                    <div>
                        <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Bloque 1 / Fundamentos Web</p>
                        <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight text-slate-950 sm:text-7xl">Construye antes de abstraer.</h1>
                    </div>
                    <p className="self-end text-lg leading-8 text-slate-600">
                        Seis fundamentos que necesitas dominar antes de React. Cada bloque incluye una practica funcional dentro de esta pagina.
                    </p>
                </section>

                <section id="bloque-1" className="grid gap-8 py-12 lg:grid-cols-[11rem_1fr]">
                    <div><p className="font-mono text-sm text-indigo-700">01 / HTML</p><h2 className="mt-2 text-2xl font-bold">Semantica primero</h2></div>
                    <div className="space-y-5">
                        <p>Usa elementos por su significado: <code>header</code> para la cabecera, <code>nav</code> para navegación, <code>main</code> para el contenido principal, <code>section</code> para grupos temáticos, <code>article</code> para contenido autónomo y <code>footer</code> para el cierre.</p>
                        <article className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm">
                            <header className="flex items-center justify-between border-b border-slate-200 pb-3"><strong>Ejercicio: artículo semántico</strong><span className="text-sm text-slate-500">5 min</span></header>
                            <section className="py-4"><h3 className="font-bold">Tu misión</h3><p className="mt-1 text-slate-600">Identifica los elementos semánticos en esta tarjeta usando el inspector del navegador.</p></section>
                            <footer className="border-t border-slate-200 pt-3 text-sm text-slate-500">Pista: esta tarjeta es un <code>article</code> real.</footer>
                        </article>
                    </div>
                </section>

                <section id="bloque-2" className="grid gap-8 border-t border-slate-300 py-12 lg:grid-cols-[11rem_1fr]">
                    <div><p className="font-mono text-sm text-indigo-700">02 / CSS</p><h2 className="mt-2 text-2xl font-bold">Flex, Grid y responsive</h2></div>
                    <div className="space-y-5">
                        <div className="flex flex-wrap gap-3"><button className={layout === 'flex' ? 'button-primary' : 'button-secondary'} onClick={() => setLayout('flex')}>Probar Flexbox</button><button className={layout === 'grid' ? 'button-primary' : 'button-secondary'} onClick={() => setLayout('grid')}>Probar Grid</button></div>
                        <div className={layout === 'flex' ? 'flex flex-wrap gap-4 rounded-xl bg-slate-900 p-5' : 'grid grid-cols-1 gap-4 rounded-xl bg-slate-900 p-5 sm:grid-cols-2 lg:grid-cols-3'}>
                            {['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis'].map(item => <div className="min-w-24 flex-1 rounded-lg bg-amber-300 p-4 font-bold text-slate-950" key={item}>{item}</div>)}
                        </div>
                        <p className="text-sm text-slate-600">Cambia el modo y reduce la ventana: Grid usa una, dos o tres columnas según el ancho; Flexbox reparte elementos en una fila que puede envolver.</p>
                    </div>
                </section>

                <section id="bloque-3" className="grid gap-8 border-t border-slate-300 py-12 lg:grid-cols-[11rem_1fr]">
                    <div><p className="font-mono text-sm text-indigo-700">03 / JS</p><h2 className="mt-2 text-2xl font-bold">Datos y funciones</h2></div>
                    <div className="space-y-5">
                        <p><code>const</code> guarda referencias; las funciones transforman datos; arrays agrupan valores y objetos describen entidades. Practica creando y modificando una lista de temas.</p>
                        <form className="flex flex-col gap-3 sm:flex-row" onSubmit={addNewTopic}><label className="sr-only" htmlFor="topic">Nuevo tema</label><input className="form-input" id="topic" value={topicName} onChange={event => setTopicName(event.target.value)} placeholder="Ej.: Variables con const y let" /><button className="button-primary" type="submit">Agregar tema</button></form>
                        <ul className="list-card">{topics.map(topic => <li className="list-item flex items-center justify-between gap-4" key={topic.id}><span className={topic.completed ? 'text-slate-400 line-through' : ''}>{topic.name}</span><button className={topic.completed ? 'button-secondary text-sm' : 'button-success text-sm'} onClick={() => toggleTopic(topic.id)}>{topic.completed ? 'Reabrir' : 'Completar'}</button></li>)}</ul>
                    </div>
                </section>

                <section id="bloque-4" className="grid gap-8 border-t border-slate-300 py-12 lg:grid-cols-[11rem_1fr]">
                    <div><p className="font-mono text-sm text-indigo-700">04 / ES6</p><h2 className="mt-2 text-2xl font-bold">Destructuring, spread y módulos</h2></div>
                    <div className="space-y-5">
                        <p>Destructuring extrae propiedades, <code>...</code> crea copias inmutables y los módulos separan código reutilizable. Esta pantalla importa <code>profileSummary</code> y <code>addTopic</code> desde <code>src/lib/fundamentals.js</code>.</p>
                        <div className="grid gap-4 rounded-xl border border-slate-300 bg-white p-5 sm:grid-cols-3">
                            {Object.entries(profile).map(([field, value]) => <label className="text-sm font-medium capitalize" key={field}>{field}<input className="form-input mt-1" name={field} value={value} onChange={updateProfile} /></label>)}
                        </div>
                        <output className="block rounded-lg bg-indigo-50 p-4 text-indigo-950">{profileSummary(profile)}</output>
                    </div>
                </section>

                <section id="bloque-5" className="grid gap-8 border-t border-slate-300 py-12 lg:grid-cols-[11rem_1fr]">
                    <div><p className="font-mono text-sm text-indigo-700">05 / ASYNC</p><h2 className="mt-2 text-2xl font-bold">Promesas y APIs</h2></div>
                    <div className="space-y-5">
                        <p>Una API responde de forma asíncrona. Con <code>async/await</code> esperas la promesa, verificas errores y actualizas la interfaz según carga, éxito o fallo.</p>
                        <button className="button-primary" disabled={requestStatus === 'loading'} onClick={loadUser}>{requestStatus === 'loading' ? 'Cargando...' : 'Solicitar usuario real'}</button>
                        {requestStatus === 'success' && <article className="rounded-xl border border-emerald-200 bg-emerald-50 p-5"><h3 className="font-bold">{user.name}</h3><p>{user.email}</p><p className="text-sm text-slate-600">{user.company.name}</p></article>}
                        {requestStatus === 'error' && <p className="rounded-lg bg-rose-50 p-4 text-rose-800">La petición falló. Revisa la conexión y vuelve a intentarlo.</p>}
                    </div>
                </section>

                <section id="bloque-6" className="grid gap-8 border-y border-slate-300 py-12 lg:grid-cols-[11rem_1fr]">
                    <div><p className="font-mono text-sm text-indigo-700">06 / DOM</p><h2 className="mt-2 text-2xl font-bold">Eventos e interacción</h2></div>
                    <div className="space-y-5">
                        <p>El DOM representa la página. Los eventos como <code>click</code>, <code>input</code>, <code>keydown</code> y <code>submit</code> permiten responder a la persona usuaria.</p>
                        <form className="rounded-xl bg-slate-900 p-5 text-white" onSubmit={submitEvent}><label className="block font-semibold" htmlFor="event-text">Prueba eventos</label><input className="form-input mt-3 bg-white text-slate-900" id="event-text" onKeyDown={event => setEventMessage(`Tecla pulsada: ${event.key}`)} onChange={event => setDraft(event.target.value)} placeholder="Escribe y pulsa una tecla" value={draft} /><div className="mt-3 flex flex-wrap gap-3"><button className="button-primary" type="submit">Enviar formulario</button><button className="button-secondary" onClick={() => setEventMessage('Botón secundario pulsado.')} type="button">Disparar click</button></div><output className="mt-4 block rounded-md bg-white/10 p-3 text-sm">{eventMessage}</output></form>
                    </div>
                </section>

                <footer className="py-10 text-center text-sm text-slate-500">Bloque 1 terminado cuando puedas explicar cada ejercicio y modificarlo sin ayuda.</footer>
            </main>
        </div>
    );
};
