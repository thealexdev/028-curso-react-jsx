const lines = parts => parts.join('\n');

const exercise = (title, instructions, language, initialCode, solution, patterns, hint, preview, execution) => ({
    title,
    instructions,
    language,
    initialCode: lines(initialCode),
    solution: lines(solution),
    patterns,
    hint,
    preview,
    execution,
});

export const stylesLessons = [
    {
        id: 'css-global-modular', number: '01', title: 'CSS global y modular', summary: 'El CSS global define bases compartidas; los CSS Modules aíslan estilos de un componente para evitar colisiones de nombres.',
        concepts: [['CSS global', 'Úsalo para reset, tipografía, variables y estilos de base.'], ['CSS Module', 'Un archivo .module.css genera clases con ámbito local.'], ['className', 'Aplica una clase CSS desde JSX.'], ['Escala', 'Aísla estilos específicos y evita selectores globales frágiles.']],
        example: lines(['/* Button.module.css */', '.primary { background: #4f46e5; color: white; }', '', '// Button.jsx', "import styles from './Button.module.css';", 'export const Button = () => <button className={styles.primary}>Guardar</button>;']),
        exercise: exercise('Crea una clase de botón base', 'Escribe una regla CSS global para .button con padding, fondo oscuro y texto blanco.', 'css', ['.button {', '  /* completa los estilos */', '}'], ['.button {', '  padding: 12px 16px;', '  border: 0;', '  border-radius: 8px;', '  background: #312e81;', '  color: white;', '}'], ['padding', 'background', 'color'], 'Una clase global se aplica con class="button" o className="button".', '<button class="button">Guardar</button>'),
    },
    {
        id: 'tailwind', number: '02', title: 'Tailwind CSS', summary: 'Tailwind aplica estilos mediante utilidades pequeñas en className, con un sistema consistente de espaciado, color y responsive design.',
        concepts: [['Utilidades', 'Clases como p-4, rounded-lg y text-white representan una regla concreta.'], ['Composición', 'Combina utilidades para construir componentes sin cambiar de archivo.'], ['Estados', 'Prefijos como hover: y focus: aplican reglas condicionales.'], ['Configuración', 'Tailwind permite extender tokens y crear utilidades de proyecto.']],
        example: lines(['export const Button = () => (', '  <button className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">', '    Guardar', '  </button>', ');']),
        exercise: exercise('Estiliza un botón con Tailwind', 'Añade padding, fondo índigo, texto blanco, bordes redondeados y hover al botón.', 'jsx', ['export const Button = () => <button>Guardar</button>;'], ['export const Button = () => <button className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">Guardar</button>;'], ['className', 'bg-indigo', 'text-white', 'hover:'], 'En Tailwind los estilos se colocan directamente en className.', undefined, 'validation'),
    },
    {
        id: 'responsive-design', number: '03', title: 'Diseño responsive', summary: 'Una interfaz responsive se adapta desde móviles a pantallas grandes con layouts fluidos y breakpoints con intención.',
        concepts: [['Mobile first', 'Define el diseño base para pantallas pequeñas.'], ['Breakpoint', 'Cambia reglas cuando la interfaz necesita más espacio.'], ['Grid', 'Distribuye contenido en columnas adaptables.'], ['Contenido', 'El diseño debe responder a su contenido, no solo a dispositivos concretos.']],
        example: lines(['.cards { display: grid; grid-template-columns: 1fr; gap: 1rem; }', '@media (min-width: 768px) {', '  .cards { grid-template-columns: repeat(3, 1fr); }', '}']),
        exercise: exercise('Crea una cuadrícula adaptable', 'Usa Grid para una columna por defecto y tres columnas desde 768px.', 'css', ['.cards {', '  /* móvil */', '}', '', '/* escritorio */'], ['.cards {', '  display: grid;', '  grid-template-columns: 1fr;', '  gap: 12px;', '}', '', '@media (min-width: 768px) {', '  .cards { grid-template-columns: repeat(3, 1fr); }', '}'], ['display\\s*:\\s*grid', '@media', 'grid-template-columns'], 'Empieza con una sola columna y sobrescribe en la media query.', '<div class="cards"><article>React</article><article>JSX</article><article>Props</article></div>'),
    },
    {
        id: 'interactive-states', number: '04', title: 'Estados hover, focus y disabled', summary: 'Los estados visuales comunican que un elemento es interactivo, está enfocado o no se puede utilizar.',
        concepts: [['hover', 'Ofrece respuesta al apuntar con un dispositivo compatible.'], ['focus-visible', 'Muestra foco de teclado sin distraer a usuarios de ratón.'], ['disabled', 'Indica y aplica una acción no disponible.'], ['Contraste', 'Los cambios de estado deben seguir siendo legibles.']],
        example: lines(['.button:hover { background: #3730a3; }', '.button:focus-visible { outline: 3px solid #fbbf24; }', '.button:disabled { opacity: .5; cursor: not-allowed; }']),
        exercise: exercise('Añade estados accesibles al botón', 'Define hover, focus-visible y disabled para la clase .button.', 'css', ['.button { background: #4f46e5; color: white; }', '', '/* añade los tres estados */'], ['.button { background: #4f46e5; color: white; padding: 12px 16px; border: 0; border-radius: 8px; }', '.button:hover { background: #3730a3; }', '.button:focus-visible { outline: 3px solid #fbbf24; outline-offset: 2px; }', '.button:disabled { opacity: .5; cursor: not-allowed; }'], [':hover', ':focus-visible', ':disabled'], 'focus-visible es preferible a focus para no mostrar el anillo de teclado en cada click.', '<button class="button">Guardar</button><button class="button" disabled>Desactivado</button>'),
    },
    {
        id: 'themes', number: '05', title: 'Temas claro y oscuro', summary: 'Los temas cambian tokens de color coherentes, no estilos aislados. Las variables CSS o clases de raíz facilitan la alternancia.',
        concepts: [['Tokens', 'Variables como --surface y --text describen intención, no un color concreto.'], ['Preferencia', 'prefers-color-scheme detecta la elección del sistema.'], ['Clase raíz', 'Una clase dark en html o body puede activar un tema.'], ['Persistencia', 'Guarda la preferencia elegida si la interfaz permite cambiarla.']],
        example: lines([':root { --surface: #ffffff; --text: #172033; }', '.dark { --surface: #172033; --text: #f8fafc; }', '.page { background: var(--surface); color: var(--text); }']),
        exercise: exercise('Define tokens para el modo oscuro', 'Crea variables de superficie y texto para :root y sobrescríbelas en .dark.', 'css', [':root {', '  /* tema claro */', '}', '', '.dark {', '  /* tema oscuro */', '}'], [':root {', '  --surface: #ffffff;', '  --text: #172033;', '}', '', '.dark {', '  --surface: #172033;', '  --text: #f8fafc;', '}'], ['--surface', '--text', '\\.dark'], 'Los componentes consumen var(--surface) y var(--text), sin saber qué tema está activo.', '<main class="dark page"><h2>Modo oscuro</h2><p>Los tokens cambian el tema.</p></main>'),
    },
    {
        id: 'visual-accessibility', number: '06', title: 'Accesibilidad visual', summary: 'Una interfaz accesible mantiene contraste, foco visible, texto legible y significados que no dependen solo del color.',
        concepts: [['Contraste', 'El texto y controles deben distinguirse claramente del fondo.'], ['Foco', 'La navegación con teclado necesita un indicador visible.'], ['Texto', 'No uses únicamente tamaño o color para expresar información crítica.'], ['Etiquetas', 'Los inputs necesitan label asociado y los iconos requieren nombre accesible.']],
        example: lines(['<label htmlFor="email">Correo electrónico</label>', '<input id="email" type="email" aria-describedby="email-help" />', '<p id="email-help">Usaremos este correo para avisos.</p>']),
        exercise: exercise('Etiqueta un campo de correo', 'Asocia label e input con htmlFor e id, y añade una ayuda mediante aria-describedby.', 'jsx', ['export const EmailField = () => (', '  <div>', '    {/* etiqueta, input y ayuda */}', '  </div>', ');'], ['export const EmailField = () => (', '  <div>', '    <label htmlFor="email">Correo electrónico</label>', '    <input id="email" type="email" aria-describedby="email-help" />', '    <p id="email-help">No compartiremos tu correo.</p>', '  </div>', ');'], ['htmlFor', 'aria-describedby', 'id="email"'], 'htmlFor debe coincidir con el id del input. aria-describedby apunta al id del texto de ayuda.', undefined, 'validation'),
    },
    {
        id: 'ui-components', number: '07', title: 'Componentes reutilizables de interfaz', summary: 'Un componente de interfaz reutilizable ofrece una API pequeña y consistente para patrones repetidos como botones, tarjetas y campos.',
        concepts: [['Variantes', 'Una prop variant define diferencias visuales intencionales.'], ['children', 'Permite que el padre defina el contenido del componente.'], ['Estados', 'Expone disabled, loading o tamaño cuando son necesarios.'], ['Consistencia', 'Centraliza el diseño para evitar duplicación en cada pantalla.']],
        example: lines(['const Button = ({ variant = "primary", children, ...rest }) => (', '  <button className={`button button--${variant}`} {...rest}>', '    {children}', '  </button>', ');']),
        exercise: exercise('Crea un Button con variante', 'Recibe variant y children, y compone una clase button--${variant} para el botón.', 'jsx', ['const Button = ({ children }) => {', '  return <button>{children}</button>;', '};'], ['const Button = ({ variant = "primary", children, ...rest }) => {', '  return <button className={`button button--${variant}`} {...rest}>{children}</button>;', '};'], ['variant', 'children', 'button--', '\\.\\.\\.rest'], 'Una variante es una prop con valor por defecto. Usa template literal para formar la clase.', undefined, 'validation'),
    },
];
