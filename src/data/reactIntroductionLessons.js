const lines = parts => parts.join('\n');

const validationExercise = (title, instructions, initialCode, solution, patterns, hint, language = 'jsx') => ({
    title,
    instructions,
    language,
    initialCode: lines(initialCode),
    solution: lines(solution),
    patterns,
    hint,
    execution: 'validation',
});

export const reactIntroductionLessons = [
    {
        id: 'react-jsx', number: '01', title: 'Que es React y JSX', summary: 'React es una biblioteca para construir interfaces con componentes. JSX es una sintaxis que describe la interfaz usando una forma parecida a HTML dentro de JavaScript.',
        concepts: [['React', 'Actualiza la interfaz a partir de datos y componentes reutilizables.'], ['JSX', 'Se transforma a llamadas JavaScript durante la compilacion.'], ['Componente', 'Funcion que devuelve una parte de la interfaz.'], ['Declarativo', 'Describes el resultado esperado en lugar de manipular el DOM paso a paso.']],
        example: lines(['const Welcome = () => {', '  return <h1>Hola, React</h1>;', '};']),
        exercise: validationExercise('Crea tu primer componente JSX', 'Completa el componente Welcome para que devuelva un encabezado h1 con el texto Hola, React.', ['const Welcome = () => {', '  // devuelve un h1', '};', '', 'export default Welcome;'], ['const Welcome = () => {', '  return <h1>Hola, React</h1>;', '};', '', 'export default Welcome;'], ['const\\s+Welcome', 'return', '<h1>', 'export\\s+default'], 'Un componente funcional es una función. JSX se devuelve con return.'),
    },
    {
        id: 'vite', number: '02', title: 'Crear un proyecto con Vite', summary: 'Vite inicia proyectos React con una configuración pequeña, servidor de desarrollo rápido y compilación para producción.',
        concepts: [['npm create vite', 'Crea el proyecto a partir de una plantilla.'], ['npm install', 'Instala las dependencias declaradas en package.json.'], ['npm run dev', 'Inicia el servidor de desarrollo local.'], ['npm run build', 'Genera archivos optimizados para producción.']],
        example: lines(['npm create vite@latest mi-app -- --template react', 'cd mi-app', 'npm install', 'npm run dev']),
        exercise: validationExercise('Prepara los comandos de Vite', 'Ordena los comandos necesarios para crear, entrar, instalar y arrancar un proyecto React con Vite.', ['// Escribe los cuatro comandos, uno por línea'], ['npm create vite@latest mi-app -- --template react', 'cd mi-app', 'npm install', 'npm run dev'], ['npm\\s+create\\s+vite', 'cd\\s+mi-app', 'npm\\s+install', 'npm\\s+run\\s+dev'], 'Primero creas el proyecto, luego entras a su carpeta, instalas y arrancas el servidor.', 'javascript'),
    },
    {
        id: 'structure', number: '03', title: 'Estructura de un proyecto React', summary: 'Una estructura clara separa el punto de entrada, la aplicación, componentes, páginas, datos y estilos.',
        concepts: [['main.jsx', 'Monta React en el elemento root del documento.'], ['App.jsx', 'Compone la interfaz principal de la aplicación.'], ['components', 'Piezas reutilizables de interfaz.'], ['pages', 'Vistas completas asociadas a una ruta o bloque.']],
        example: lines(['src/', '  main.jsx', '  App.jsx', '  components/', '    Button.jsx', '  pages/', '    Home.jsx', '  index.css']),
        exercise: validationExercise('Importa un componente desde la estructura correcta', 'Completa App para importar y renderizar Header desde la carpeta components.', ['// importa Header desde ./components/Header', '', 'export const App = () => {', '  return (', '    <main>', '      {/* renderiza Header aquí */}', '    </main>', '  );', '};'], ["import { Header } from './components/Header';", '', 'export const App = () => {', '  return (', '    <main>', '      <Header />', '    </main>', '  );', '};'], ['import', 'components/Header', '<Header\\s*/>'], 'La ruta es relativa a App.jsx y el componente se renderiza como una etiqueta con mayúscula.'),
    },
    {
        id: 'functional-components', number: '04', title: 'Componentes funcionales', summary: 'Los componentes funcionales son funciones de JavaScript que reciben datos y devuelven JSX.',
        concepts: [['Mayúscula inicial', 'React distingue componentes de etiquetas HTML por la inicial mayúscula.'], ['Una responsabilidad', 'Cada componente debe tener un propósito concreto.'], ['Return', 'Devuelve el JSX que React debe renderizar.'], ['Composición', 'Un componente puede renderizar otros componentes.']],
        example: lines(['export const Badge = () => {', '  return <span>Nuevo</span>;', '};']),
        exercise: validationExercise('Extrae un componente Badge', 'Crea un componente Badge que devuelva un span y úsalo dentro de ProductCard.', ['export const ProductCard = () => {', '  return <article><h2>Curso React</h2>{/* Badge */}</article>;', '};'], ['const Badge = () => <span>Nuevo</span>;', '', 'export const ProductCard = () => {', '  return <article><h2>Curso React</h2><Badge /></article>;', '};'], ['Badge', '<span>', '<Badge\\s*/>'], 'Define Badge con mayúscula y después úsalo como <Badge />.'),
    },
    {
        id: 'imports-exports', number: '05', title: 'Importar y exportar componentes', summary: 'Los módulos permiten dividir una aplicación en archivos y declarar explícitamente qué valores comparte cada uno.',
        concepts: [['Export nombrado', 'Permite exportar varios valores desde un módulo.'], ['Export default', 'Declara una exportación principal por archivo.'], ['Import nombrado', 'Usa llaves y debe coincidir con el nombre exportado.'], ['Ruta relativa', 'Comienza con ./ o ../ al importar archivos propios.']],
        example: lines(['// Button.jsx', 'export const Button = () => <button>Guardar</button>;', '', '// App.jsx', "import { Button } from './components/Button';"]),
        exercise: validationExercise('Conecta export e import', 'Exporta Button como export nombrado e impórtalo en App.', ['// Button.jsx', 'const Button = () => <button>Guardar</button>;', '', '// App.jsx', '// importa Button', 'export const App = () => <Button />;'], ['// Button.jsx', 'export const Button = () => <button>Guardar</button>;', '', '// App.jsx', "import { Button } from './Button';", 'export const App = () => <Button />;'], ['export\\s+const\\s+Button', 'import\\s*{\\s*Button\\s*}', '<Button\\s*/>'], 'Si exportas con export const, importa el mismo nombre entre llaves.'),
    },
    {
        id: 'jsx-expressions', number: '06', title: 'Expresiones JavaScript en JSX', summary: 'Las llaves permiten insertar valores, operaciones y expresiones JavaScript dentro de JSX.',
        concepts: [['Llaves', 'Abren una expresión JavaScript dentro de JSX.'], ['Variables', 'Puedes mostrar valores ya calculados.'], ['Operadores', 'Puedes transformar valores antes de mostrarlos.'], ['Atributos', 'Las expresiones también funcionan en atributos como src o aria-label.']],
        example: lines(["const name = 'Lucia';", 'const lessons = 6;', '', 'export const Progress = () => <p>{name} completó {lessons} lecciones.</p>;']),
        exercise: validationExercise('Muestra datos dinámicos', 'Usa las variables name y lessons dentro del párrafo JSX.', ["const name = 'Lucia';", 'const lessons = 6;', '', 'export const Progress = () => <p>{/* muestra name y lessons */}</p>;'], ["const name = 'Lucia';", 'const lessons = 6;', '', 'export const Progress = () => <p>{name} completó {lessons} lecciones.</p>;'], ['{\\s*name\\s*}', '{\\s*lessons\\s*}'], 'Todo lo que sea JavaScript dentro de JSX debe ir entre llaves.'),
    },
    {
        id: 'conditional-rendering', number: '07', title: 'Renderizado condicional', summary: 'React puede mostrar una interfaz distinta según el estado de tus datos mediante operadores condicionales.',
        concepts: [['Operador ternario', 'Elige entre dos resultados: condición ? A : B.'], ['Operador &&', 'Muestra algo solo cuando la condición es verdadera.'], ['Estado', 'Los cambios de estado provocan un nuevo renderizado.'], ['Fallback', 'Ofrece una interfaz útil cuando faltan datos.']],
        example: lines(['const isLoggedIn = true;', 'export const Status = () => (', '  <p>{isLoggedIn ? "Bienvenido" : "Inicia sesión"}</p>', ');']),
        exercise: validationExercise('Muestra un mensaje según el acceso', 'Usa un ternario para mostrar Bienvenido si isLoggedIn es true o Inicia sesión si es false.', ['const isLoggedIn = false;', '', 'export const Status = () => <p>{/* condición */}</p>;'], ['const isLoggedIn = false;', '', "export const Status = () => <p>{isLoggedIn ? 'Bienvenido' : 'Inicia sesión'}</p>;"], ['isLoggedIn\\s*\\?', ':'], 'La condición va antes de ?. El resultado falso va después de :.'),
    },
    {
        id: 'lists-keys', number: '08', title: 'Listas y propiedad key', summary: 'map transforma un array en elementos JSX. key identifica cada elemento de forma estable entre renders.',
        concepts: [['map', 'Crea un nuevo array aplicando una función a cada elemento.'], ['key', 'Ayuda a React a reconocer qué elemento cambió, se movió o se eliminó.'], ['ID estable', 'Usa un id de datos reales antes que el índice.'], ['Renderizado', 'Una lista se inserta entre llaves dentro de JSX.']],
        example: lines(['const topics = [{ id: 1, name: "JSX" }, { id: 2, name: "Props" }];', '', 'export const TopicList = () => (', '  <ul>{topics.map(topic => <li key={topic.id}>{topic.name}</li>)}</ul>', ');']),
        exercise: validationExercise('Renderiza una lista con key', 'Usa map para crear un li por tema y asigna key={topic.id}.', ["const topics = [{ id: 1, name: 'JSX' }, { id: 2, name: 'Props' }];", '', 'export const TopicList = () => <ul>{/* crea los li */}</ul>;'], ["const topics = [{ id: 1, name: 'JSX' }, { id: 2, name: 'Props' }];", '', 'export const TopicList = () => <ul>{topics.map(topic => <li key={topic.id}>{topic.name}</li>)}</ul>;'], ['topics\\.map', '<li\\s+key=', 'topic\\.id'], 'El callback de map recibe topic. Devuelve <li key={topic.id}>{topic.name}</li>.'),
    },
    {
        id: 'fragments', number: '09', title: 'Fragmentos', summary: 'Un fragmento agrupa elementos hermanos sin añadir un div extra al DOM.',
        concepts: [['Fragment', 'La forma completa es <React.Fragment>.'], ['Sintaxis corta', 'Usa <> y </> cuando no necesitas una key.'], ['DOM limpio', 'Evita contenedores innecesarios que afectan al HTML y CSS.'], ['Listas', 'Usa Fragment con key cuando un elemento de lista devuelve varios nodos.']],
        example: lines(['export const Header = () => (', '  <>', '    <h1>React / Ruta</h1>', '    <p>Aprende construyendo.</p>', '  </>', ');']),
        exercise: validationExercise('Agrupa contenido sin div', 'Envuelve h1 y p en un fragmento corto.', ['export const Intro = () => (', '  // agrupa los elementos sin div', '  <h1>Bloque 2</h1>', '  <p>Introducción a React</p>', ');'], ['export const Intro = () => (', '  <>', '    <h1>Bloque 2</h1>', '    <p>Introducción a React</p>', '  </>', ');'], ['<>', '</>'], 'Coloca <> antes del h1 y </> después del párrafo.'),
    },
];
