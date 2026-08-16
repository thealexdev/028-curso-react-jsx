const lines = parts => parts.join('\n');

const practice = (id, level, title, instructions, initialCode, solution, patterns, hint, language = 'jsx') => ({
    id, level, title, instructions, language, initialCode: lines(initialCode), solution: lines(solution), patterns, hint, execution: 'validation',
});

export const reactIntroductionLessons = [
    {
        id: 'react-jsx', number: '01', category: 'React desde cero', title: 'React y JSX',
        summary: 'React construye interfaces a partir de componentes. JSX es la sintaxis que permite describir la interfaz con etiquetas dentro de JavaScript.',
        objectives: ['Explicar qué problema resuelve React.', 'Crear una función que devuelva JSX.', 'Reconocer las reglas básicas de JSX.'],
        explanation: ['Con JavaScript tradicional debes buscar nodos y cambiarlos paso a paso. En React describes cómo debería verse la interfaz para unos datos y React actualiza el DOM por ti.', 'JSX parece HTML, pero vive dentro de JavaScript. Por eso un componente devuelve JSX y sus etiquetas deben cerrarse. class también se escribe className porque class es una palabra reservada de JavaScript.', 'Un componente es una función con mayúscula inicial. React la usa como una etiqueta propia: <Welcome />.'],
        concepts: [['React', 'Biblioteca para crear interfaces con componentes.'], ['JSX', 'Sintaxis para describir una interfaz en JavaScript.'], ['Componente', 'Función reutilizable que devuelve JSX.'], ['Declarativo', 'Describe el resultado, no los pasos sobre el DOM.'], ['className', 'Atributo JSX equivalente a class en HTML.'], ['Etiqueta cerrada', 'Un elemento sin hijos termina con />.']],
        example: lines(['export const Welcome = () => {', '  return <h1 className="title">Hola, React</h1>;', '};']),
        commonMistakes: ['Nombrar un componente con minúscula.', 'Usar class en lugar de className.', 'Olvidar cerrar una etiqueta como <img />.'],
        exercises: [
            practice('jsx-1', '1. Completa', 'Devuelve tu primer JSX', 'Completa Welcome para devolver un h1 con el texto Hola, React.', ['const Welcome = () => {', '  // devuelve un h1', '};'], ['const Welcome = () => {', '  return <h1>Hola, React</h1>;', '};'], ['Welcome', 'return', '<h1>'], 'Un componente es una función y el JSX se entrega con return.'),
            practice('jsx-2', '2. Aplica', 'Corrige atributos JSX', 'Cambia el atributo incorrecto para aplicar la clase card.', ['export const Card = () => <article class="card">Curso React</article>;'], ['export const Card = () => <article className="card">Curso React</article>;'], ['className', '<article'], 'Dentro de JSX, class se llama className.'),
            practice('jsx-3', '3. Corrige', 'Cierra una imagen', 'Corrige el elemento img para que JSX pueda compilarlo.', ['export const Avatar = () => <img src="/avatar.png" alt="Ana">;'], ['export const Avatar = () => <img src="/avatar.png" alt="Ana" />;'], ['<img', '/>'], 'Las etiquetas sin contenido se autocierra con />.'),
            practice('jsx-4', '4. Construye', 'Crea una tarjeta de bienvenida', 'Crea WelcomeCard con un article, h1 y p. Añade className="card" al article.', ['// crea el componente'], ['export const WelcomeCard = () => (', '  <article className="card">', '    <h1>Bienvenida</h1><p>Empieza tu ruta con React.</p>', '  </article>', ');'], ['WelcomeCard', '<article', 'className', '<h1>', '<p>'], 'Escribe primero la función y después el JSX que debe devolver.'),
        ],
    },
    {
        id: 'vite', number: '02', category: 'React desde cero', title: 'Tu entorno con Vite',
        summary: 'Vite crea el proyecto, instala las herramientas y ofrece un servidor de desarrollo para ver cambios al instante.',
        objectives: ['Crear un proyecto React con Vite.', 'Distinguir desarrollo de producción.', 'Usar los comandos básicos del proyecto.'],
        explanation: ['Un proyecto React necesita una herramienta que transforme JSX y agrupe archivos para el navegador. Vite realiza esa tarea sin que tengas que configurarla desde cero.', 'El orden importa: crea el proyecto, entra en la carpeta, instala dependencias y arranca el servidor. npm run dev es para desarrollar; npm run build genera una versión optimizada para publicar.', 'No copies comandos sin leerlos. El nombre después de vite será la carpeta del proyecto.'],
        concepts: [['npm create vite', 'Genera una aplicación desde una plantilla.'], ['npm install', 'Descarga las dependencias del proyecto.'], ['npm run dev', 'Inicia el servidor de desarrollo.'], ['npm run build', 'Crea los archivos de producción.'], ['package.json', 'Lista scripts y dependencias.'], ['Servidor local', 'Muestra la aplicación durante el desarrollo.']],
        example: lines(['npm create vite@latest mi-app -- --template react', 'cd mi-app', 'npm install', 'npm run dev']),
        commonMistakes: ['Ejecutar npm run dev antes de instalar dependencias.', 'Abrir index.html directamente en vez de usar Vite.', 'Confundir build con un servidor de desarrollo.'],
        exercises: [
            practice('vite-1', '1. Completa', 'Crea el proyecto', 'Escribe el comando para crear un proyecto React llamado mi-app.', ['// escribe el comando'], ['npm create vite@latest mi-app -- --template react'], ['npm', 'create', 'vite', 'mi-app', 'react'], 'Vite necesita el nombre y la plantilla react.', 'javascript'),
            practice('vite-2', '2. Aplica', 'Instala y arranca', 'Después de entrar en mi-app, escribe los comandos para instalar y arrancar el servidor.', ['cd mi-app', '', '// instala y arranca'], ['cd mi-app', 'npm install', 'npm run dev'], ['cd', 'npm', 'install', 'run', 'dev'], 'Instalar va antes de arrancar.', 'javascript'),
            practice('vite-3', '3. Corrige', 'Separa desarrollo y publicación', 'El comando mostrado no crea una versión publicable. Sustitúyelo por el correcto.', ['npm run dev // publicar la app'], ['npm run build // crear archivos para publicar'], ['npm', 'run', 'build'], 'dev mantiene un servidor; build genera la carpeta de salida.', 'javascript'),
            practice('vite-4', '4. Construye', 'Escribe el flujo completo', 'Escribe los cuatro comandos ordenados para crear y arrancar una app React llamada agenda-react.', ['// cuatro comandos, uno por línea'], ['npm create vite@latest agenda-react -- --template react', 'cd agenda-react', 'npm install', 'npm run dev'], ['vite', 'agenda-react', 'cd', 'install', 'dev'], 'Recuerda: crear, entrar, instalar, desarrollar.', 'javascript'),
        ],
    },
    {
        id: 'structure', number: '03', category: 'React desde cero', title: 'Estructura de una aplicación',
        summary: 'Una estructura clara separa el punto de arranque, la aplicación, las pantallas y las piezas reutilizables.',
        objectives: ['Identificar main.jsx y App.jsx.', 'Separar componentes y páginas.', 'Importar usando rutas relativas.'],
        explanation: ['main.jsx es el punto de entrada: monta App dentro del elemento root del HTML. App.jsx compone la interfaz principal de la aplicación.', 'Un componente es una pieza reutilizable, como Button o Header. Una página combina muchos componentes y suele representar una vista completa.', 'Las rutas de archivos propios comienzan con ./ para la carpeta actual o ../ para subir un nivel.'],
        concepts: [['main.jsx', 'Monta React en el DOM.'], ['App.jsx', 'Componente raíz de la aplicación.'], ['components', 'Piezas reutilizables de interfaz.'], ['pages', 'Pantallas completas.'], ['Import', 'Trae un valor exportado desde otro archivo.'], ['Ruta relativa', 'Ubica archivos respecto al archivo actual.']],
        example: lines(['src/', '  main.jsx', '  App.jsx', '  components/', '    Header.jsx', '  pages/', '    Home.jsx']),
        commonMistakes: ['Poner toda la aplicación en App sin extraer piezas reutilizables.', 'Usar una ruta absoluta para archivos propios.', 'Mezclar una página completa con un botón reutilizable.'],
        exercises: [
            practice('structure-1', '1. Completa', 'Importa Header', 'Importa Header desde components/Header.', ['// importa Header', '', 'export const App = () => <Header />;'], ["import { Header } from './components/Header';", '', 'export const App = () => <Header />;'], ['import', 'Header', 'components/Header'], 'App.jsx está dentro de src; components también.', 'jsx'),
            practice('structure-2', '2. Aplica', 'Monta una página', 'Importa Home desde pages/Home y renderízala dentro de main.', ['// importa Home', '', 'export const App = () => <main>{/* Home */}</main>;'], ["import { Home } from './pages/Home';", '', 'export const App = () => <main><Home /></main>;'], ['import', 'pages/Home', '<Home'], 'Home empieza en mayúscula porque es un componente.'),
            practice('structure-3', '3. Corrige', 'Encuentra el archivo raíz', 'El punto de entrada debe montar App, no Header. Corrige main.jsx.', ["import { Header } from './components/Header';", "createRoot(document.getElementById('root')).render(<Header />);"], ["import { App } from './App';", "createRoot(document.getElementById('root')).render(<App />);"], ['App', 'createRoot', '<App'], 'main.jsx conecta el DOM con el componente raíz App.'),
            practice('structure-4', '4. Construye', 'Compón una pantalla', 'Importa Header y CourseList desde components y úsalos dentro de App.', ['// construye App'], ["import { Header } from './components/Header';", "import { CourseList } from './components/CourseList';", '', 'export const App = () => <main><Header /><CourseList /></main>;'], ['import', 'Header', 'CourseList', '<Header', '<CourseList'], 'Importa las piezas y compón la página con ellas.'),
        ],
    },
    {
        id: 'components', number: '04', category: 'React desde cero', title: 'Componentes y composición',
        summary: 'Un componente debe tener una responsabilidad reconocible. Las interfaces grandes aparecen al combinar componentes pequeños.',
        objectives: ['Crear componentes funcionales.', 'Extraer una pieza con una responsabilidad.', 'Componer una interfaz con componentes.'],
        explanation: ['Divide una interfaz cuando una parte tiene un propósito propio, se repite o sería más fácil de leer como una unidad. No extraigas componentes por cada etiqueta aislada.', 'Un componente puede utilizar otros componentes. Esta composición permite que App describa la estructura general y cada pieza resuelva un detalle.', 'El nombre debe explicar su responsabilidad: CourseCard comunica más que Box.'],
        concepts: [['Responsabilidad', 'Una tarea clara para cada componente.'], ['Composición', 'Un componente renderiza otros componentes.'], ['Mayúscula', 'Distingue componentes de etiquetas HTML.'], ['Return', 'Entrega el JSX que se renderizará.'], ['Reutilización', 'Una pieza puede aparecer en varios lugares.'], ['Legibilidad', 'Componentes claros reducen complejidad.']],
        example: lines(['const Badge = () => <span>Nuevo</span>;', '', 'export const CourseCard = () => (', '  <article><h2>React</h2><Badge /></article>', ');']),
        commonMistakes: ['Crear un componente para cada div sin una razón.', 'Llamar un componente con minúscula.', 'Hacer que un componente haga demasiadas tareas distintas.'],
        exercises: [
            practice('components-1', '1. Completa', 'Crea un Badge', 'Haz que Badge devuelva un span con el texto Nuevo.', ['const Badge = () => {', '  // devuelve un span', '};'], ['const Badge = () => {', '  return <span>Nuevo</span>;', '};'], ['Badge', 'return', '<span>'], 'La función debe devolver el JSX del badge.'),
            practice('components-2', '2. Aplica', 'Compón una tarjeta', 'Renderiza Badge dentro de CourseCard.', ['const Badge = () => <span>Nuevo</span>;', '', 'export const CourseCard = () => <article><h2>React</h2>{/* Badge */}</article>;'], ['const Badge = () => <span>Nuevo</span>;', '', 'export const CourseCard = () => <article><h2>React</h2><Badge /></article>;'], ['Badge', '<Badge'], 'Un componente se usa igual que una etiqueta con mayúscula.'),
            practice('components-3', '3. Corrige', 'Nombra correctamente', 'React no reconoce courseCard como componente. Corrige su nombre y uso.', ['const courseCard = () => <article>React</article>;', 'export const App = () => <courseCard />;'], ['const CourseCard = () => <article>React</article>;', 'export const App = () => <CourseCard />;'], ['CourseCard', '<CourseCard'], 'Las mayúsculas hacen que React trate la etiqueta como componente.'),
            practice('components-4', '4. Construye', 'Compón un panel', 'Crea Title y EmptyState; úsalos dentro de Dashboard.', ['// crea los tres componentes'], ['const Title = () => <h1>Mis cursos</h1>;', 'const EmptyState = () => <p>Aún no tienes cursos.</p>;', '', 'export const Dashboard = () => <section><Title /><EmptyState /></section>;'], ['Title', 'EmptyState', 'Dashboard', '<Title', '<EmptyState'], 'Cada pieza tiene una responsabilidad: título, estado vacío y composición.'),
        ],
    },
    {
        id: 'expressions', number: '05', category: 'React desde cero', title: 'Datos y condiciones en JSX',
        summary: 'Las llaves conectan los datos de JavaScript con la interfaz. Las condiciones permiten que la interfaz responda a esos datos.',
        objectives: ['Mostrar variables dentro de JSX.', 'Usar un ternario para dos alternativas.', 'Usar && para contenido opcional.'],
        explanation: ['Dentro de JSX, las llaves abren una expresión de JavaScript. Puedes insertar una variable, una operación o el resultado de una función.', 'El ternario condición ? A : B elige exactamente una de dos interfaces. El operador && muestra su lado derecho solo cuando la condición es verdadera.', 'La interfaz debe explicar el estado de los datos: no es igual tener cursos, no tenerlos o estar cargándolos.'],
        concepts: [['Llaves', 'Insertan una expresión JavaScript en JSX.'], ['Ternario', 'Elige entre dos resultados.'], ['&&', 'Renderiza algo solo si una condición es verdadera.'], ['Variable', 'Dato disponible para el componente.'], ['Fallback', 'Interfaz útil cuando no hay datos.'], ['Atributo dinámico', 'Una expresión también funciona en atributos.']],
        example: lines(["const name = 'Lucía';", 'const hasAccess = true;', 'export const Status = () => <p>{hasAccess ? `Hola, ${name}` : "Inicia sesión"}</p>;']),
        commonMistakes: ['Escribir una variable directamente sin llaves.', 'Olvidar la alternativa falsa en un ternario.', 'Usar && cuando realmente necesitas mostrar uno de dos resultados.'],
        exercises: [
            practice('expressions-1', '1. Completa', 'Muestra un nombre', 'Usa name dentro del h1.', ["const name = 'Lucía';", 'export const Greeting = () => <h1>{/* name */}</h1>;'], ["const name = 'Lucía';", 'export const Greeting = () => <h1>{name}</h1>;'], ['{', 'name', '}'], 'Una expresión JavaScript va entre llaves.'),
            practice('expressions-2', '2. Aplica', 'Describe el avance', 'Muestra completed y total dentro del párrafo.', ['const completed = 2;', 'const total = 6;', 'export const Progress = () => <p>{/* texto dinámico */}</p>;'], ['const completed = 2;', 'const total = 6;', 'export const Progress = () => <p>{completed} de {total} lecciones</p>;'], ['completed', 'total', '{'], 'Puedes mezclar texto normal y varias expresiones.'),
            practice('expressions-3', '3. Corrige', 'Muestra un estado', 'Completa el ternario: si isLoggedIn es true muestra Bienvenido; si no, Inicia sesión.', ['const isLoggedIn = false;', 'export const Status = () => <p>{isLoggedIn}</p>;'], ['const isLoggedIn = false;', "export const Status = () => <p>{isLoggedIn ? 'Bienvenido' : 'Inicia sesión'}</p>;"], ['isLoggedIn', '?', ':'], 'El ternario necesita una condición, resultado verdadero y resultado falso.'),
            practice('expressions-4', '4. Construye', 'Añade una alerta opcional', 'Muestra el span "Nuevo" solo cuando isNew sea true.', ['const isNew = true;', 'export const Course = () => <article><h2>React</h2>{/* alerta */}</article>;'], ['const isNew = true;', 'export const Course = () => <article><h2>React</h2>{isNew && <span>Nuevo</span>}</article>;'], ['isNew', '&&', '<span>'], '&& es útil cuando no hay alternativa que mostrar.'),
        ],
    },
    {
        id: 'lists', number: '06', category: 'React desde cero', title: 'Listas y fragmentos',
        summary: 'map transforma datos en elementos JSX. key da a React una identidad estable para actualizar cada elemento correctamente.',
        objectives: ['Renderizar arrays con map.', 'Asignar una key estable.', 'Agrupar nodos sin añadir div innecesarios.'],
        explanation: ['Una lista visible parte de un array de datos. map recibe cada elemento y devuelve JSX para él. El resultado se inserta entre llaves.', 'key no es un texto decorativo: permite a React relacionar un elemento de datos con su nodo entre renders. Usa un id estable; el índice solo es último recurso para listas estáticas.', 'Un fragmento agrupa varios elementos hermanos sin crear otro nodo en el DOM. La forma corta <> funciona cuando no necesitas una key.'],
        concepts: [['map', 'Transforma cada elemento de un array.'], ['key', 'Identidad estable de cada elemento renderizado.'], ['id', 'Mejor fuente habitual para key.'], ['Fragment', 'Agrupa nodos sin añadir un div.'], ['Array', 'Colección de datos a renderizar.'], ['Callback', 'Función aplicada a cada elemento por map.']],
        example: lines(['const topics = [{ id: 1, name: "JSX" }, { id: 2, name: "Componentes" }];', 'export const TopicList = () => <ul>{topics.map(topic => (', '  <li key={topic.id}>{topic.name}</li>', '))}</ul>;']),
        commonMistakes: ['Olvidar key en los elementos de una lista.', 'Usar el índice cuando los datos tienen id.', 'Crear un div extra solo para devolver dos nodos hermanos.'],
        exercises: [
            practice('lists-1', '1. Completa', 'Renderiza títulos', 'Usa map para crear un li por cada topic.', ["const topics = ['JSX', 'Componentes'];", 'export const Topics = () => <ul>{/* crea los li */}</ul>;'], ["const topics = ['JSX', 'Componentes'];", 'export const Topics = () => <ul>{topics.map(topic => <li>{topic}</li>)}</ul>;'], ['map', '<li>', 'topic'], 'map devuelve un nuevo array de elementos JSX.'),
            practice('lists-2', '2. Aplica', 'Añade una key estable', 'Usa course.id como key de cada artículo.', ["const courses = [{ id: 1, title: 'React' }];", 'export const Courses = () => <section>{courses.map(course => <article>{course.title}</article>)}</section>;'], ["const courses = [{ id: 1, title: 'React' }];", 'export const Courses = () => <section>{courses.map(course => <article key={course.id}>{course.title}</article>)}</section>;'], ['map', 'key', 'course.id'], 'key va en el primer elemento que devuelve map.'),
            practice('lists-3', '3. Corrige', 'Evita el div extra', 'Agrupa h1 y p con un fragmento corto.', ['export const Intro = () => <div><h1>React</h1><p>Aprende construyendo.</p></div>;'], ['export const Intro = () => <><h1>React</h1><p>Aprende construyendo.</p></>;'], ['<>', '</>'], 'El fragmento corto no añade ningún elemento al DOM.'),
            practice('lists-4', '4. Construye', 'Crea una lista de cursos', 'Renderiza cada curso como article con key, h2 y p.', ["const courses = [{ id: 1, title: 'JSX', level: 'Inicial' }];", '// crea CourseList'], ["const courses = [{ id: 1, title: 'JSX', level: 'Inicial' }];", 'export const CourseList = () => <section>{courses.map(course => (', '  <article key={course.id}><h2>{course.title}</h2><p>{course.level}</p></article>', '))}</section>;'], ['CourseList', 'map', 'key', 'course.id', '<article'], 'Empieza con section y añade map dentro de sus llaves.'),
        ],
    },
];

reactIntroductionLessons.finalChallenge = {
    title: 'Panel de cursos con React',
    summary: 'Compón una pantalla de cursos con componentes, datos dinámicos, una condición y una lista con keys estables. Este reto se valida como estructura JSX: ejecútalo en un proyecto Vite para verlo.',
    requirements: ['Crea Header, CourseList y CourseCard.', 'Usa JSX y className correctamente.', 'Renderiza datos con map y key={course.id}.', 'Muestra un estado vacío si no hay cursos.', 'Compón todo desde App.'],
    exercise: practice('react-final', 'Reto final', 'Construye el panel', 'Completa los componentes. No copies la solución: crea cada pieza, después conéctalas en App.', [
        "const courses = [{ id: 1, title: 'JSX', level: 'Inicial' }, { id: 2, title: 'Componentes', level: 'Inicial' }];", '', '// Crea Header', '// Crea CourseCard', '// Crea CourseList usando map y key', '', 'export const App = () => (', '  <main className="app">', '    {/* Header y CourseList */}', '  </main>', ');'
    ], [
        "const courses = [{ id: 1, title: 'JSX', level: 'Inicial' }, { id: 2, title: 'Componentes', level: 'Inicial' }];", '', 'const Header = () => <header><h1>Mis cursos</h1></header>;', 'const CourseCard = ({ course }) => <article><h2>{course.title}</h2><p>{course.level}</p></article>;', 'const CourseList = () => courses.length ? <section>{courses.map(course => <CourseCard key={course.id} course={course} />)}</section> : <p>No hay cursos.</p>;', '', 'export const App = () => (', '  <main className="app">', '    <Header />', '    <CourseList />', '  </main>', ');'
    ], ['Header', 'CourseCard', 'CourseList', 'map', 'key', 'course.id', 'className', '<Header', '<CourseList'], 'Sigue el orden de abajo arriba: tarjeta, lista y composición final.'),
};
