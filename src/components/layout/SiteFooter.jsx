/* eslint-disable react/prop-types */
export const SiteFooter = ({ dark = false }) => (
    <footer className={dark ? 'border-t border-white/10 bg-slate-950 px-4 py-8 text-slate-400' : 'border-t border-slate-200 bg-white px-4 py-8 text-slate-500'}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm sm:flex-row sm:text-left">
            <p>React / Ruta. Aprende construyendo.</p>
            <p>Creado por <a className={dark ? 'font-semibold text-cyan-300 hover:text-cyan-100' : 'font-semibold text-indigo-700 hover:text-indigo-900'} href="https://thealexdev.site" rel="noreferrer" target="_blank">thealexdev.site</a> para <a className={dark ? 'font-semibold text-cyan-300 hover:text-cyan-100' : 'font-semibold text-indigo-700 hover:text-indigo-900'} href="https://hexoranet.com" rel="noreferrer" target="_blank">Hexoranet</a>.</p>
        </div>
    </footer>
);
