/* eslint-disable no-useless-escape */
const lines = parts => parts.join('\n');

const validationExercise = (title, instructions, initialCode, solution, patterns, hint) => ({
    title,
    instructions,
    language: 'jsx',
    initialCode: lines(initialCode),
    solution: lines(solution),
    patterns,
    hint,
    execution: 'validation',
});

export const propsCommunicationLessons = [
    {
        id: 'props', number: '01', title: 'Props', summary: 'Las props son datos de solo lectura que un componente padre entrega a un componente hijo.',
        concepts: [['Flujo unidireccional', 'Los datos viajan del padre hacia el hijo.'], ['Solo lectura', 'Un componente hijo no debe modificar sus props.'], ['Configuración', 'Las props hacen reutilizable un mismo componente.'], ['Tipos de valor', 'Puedes enviar textos, números, objetos, funciones o JSX.']],
        example: lines(['const Greeting = ({ name }) => <h1>Hola, {name}</h1>;', '', 'export const App = () => <Greeting name="Lucia" />;']),
        exercise: validationExercise('Envía una prop name', 'Pasa name="Alex" a Greeting y muestra la prop dentro del h1.', ['const Greeting = props => <h1>{/* name */}</h1>;', '', 'export const App = () => <Greeting />;'], ['const Greeting = props => <h1>Hola, {props.name}</h1>;', '', 'export const App = () => <Greeting name="Alex" />;'], ['props\\.name', '<Greeting\\s+name='], 'El padre añade name="Alex". El hijo puede leerla con props.name.'),
    },
    {
        id: 'default-props', number: '02', title: 'Props por defecto', summary: 'Los valores por defecto evitan interfaces incompletas cuando el padre no envía una prop opcional.',
        concepts: [['Parámetro por defecto', 'Asigna un valor al desestructurar una prop.'], ['Opcionalidad', 'Úsalo cuando una prop no es obligatoria.'], ['Fallback', 'La interfaz sigue siendo útil sin datos externos.'], ['Prioridad', 'El valor enviado por el padre reemplaza el valor por defecto.']],
        example: lines(['const Avatar = ({ name = "Invitado" }) => <p>{name}</p>;', '', 'export const App = () => <Avatar />;']),
        exercise: validationExercise('Añade un valor por defecto', 'Haz que name valga Invitado cuando Avatar no reciba esa prop.', ['const Avatar = ({ name }) => <p>{name}</p>;', '', 'export const App = () => <Avatar />;'], ['const Avatar = ({ name = "Invitado" }) => <p>{name}</p>;', '', 'export const App = () => <Avatar />;'], ['name\\s*=\\s*[\'\"]Invitado'], 'Asigna el valor dentro de los parámetros: ({ name = "Invitado" }).'),
    },
    {
        id: 'destructuring-props', number: '03', title: 'Desestructuracion de props', summary: 'Desestructurar evita repetir props.algo y deja explícitos los datos que necesita el componente.',
        concepts: [['Parámetros', 'Extrae props directamente en la firma de la función.'], ['Legibilidad', 'El componente muestra qué datos espera.'], ['Objetos anidados', 'Puedes desestructurar con cuidado y valores por defecto.'], ['Rest props', '...rest recoge propiedades no extraídas.']],
        example: lines(['const Profile = ({ name, role }) => (', '  <p>{name} trabaja como {role}</p>', ');']),
        exercise: validationExercise('Desestructura dos props', 'Cambia Profile para extraer name y role en los parámetros.', ['const Profile = props => <p>{props.name} trabaja como {props.role}</p>;'], ['const Profile = ({ name, role }) => <p>{name} trabaja como {role}</p>;'], ['\\(\\{\\s*name\\s*,\\s*role\\s*\\}\\)', '{\\s*name\\s*}', '{\\s*role\\s*}'], 'Sustituye props por ({ name, role }) y elimina props. de cada uso.'),
    },
    {
        id: 'children', number: '04', title: 'children', summary: 'children representa el contenido anidado entre las etiquetas de un componente.',
        concepts: [['Contenido anidado', 'Todo lo que pongas entre apertura y cierre llega como children.'], ['Contenedores', 'Es útil para Card, Modal, Layout y Button.'], ['Composición', 'El padre decide el contenido y el hijo aporta la estructura.'], ['JSX válido', 'children puede ser texto, elementos, arrays o funciones.']],
        example: lines(['const Card = ({ children }) => <article className="card">{children}</article>;', '', 'export const App = () => <Card><h2>React</h2></Card>;']),
        exercise: validationExercise('Crea un contenedor Card', 'Recibe children en Card y renderiza un h2 dentro de ese componente.', ['const Card = () => <article>{/* contenido */}</article>;', '', 'export const App = () => <Card>{/* título */}</Card>;'], ['const Card = ({ children }) => <article>{children}</article>;', '', 'export const App = () => <Card><h2>Bloque 3</h2></Card>;'], ['children', '{\\s*children\\s*}', '<Card>'], 'children es una prop especial: recíbela y colócala dentro del JSX de Card.'),
    },
    {
        id: 'parent-child', number: '05', title: 'Comunicacion padre a hijo', summary: 'El padre posee los datos y configura a sus hijos mediante props. Esta dirección mantiene el flujo predecible.',
        concepts: [['Fuente de verdad', 'El padre conserva el dato que comparte.'], ['Prop explícita', 'Nombra cada dato según su intención: user, title o isOpen.'], ['Reutilización', 'El mismo hijo cambia según las props recibidas.'], ['Sincronización', 'Cuando el padre se actualiza, el hijo recibe nuevas props.']],
        example: lines(['const CourseTitle = ({ title }) => <h2>{title}</h2>;', '', 'export const Dashboard = () => {', '  const title = "Introducción a React";', '  return <CourseTitle title={title} />;', '};']),
        exercise: validationExercise('Comparte un dato desde Dashboard', 'Declara course en Dashboard, pásalo a CourseTitle y muéstralo en el hijo.', ['const CourseTitle = () => <h2>{/* course */}</h2>;', '', 'export const Dashboard = () => {', "  const course = 'Props';", '  return <CourseTitle />;', '};'], ['const CourseTitle = ({ course }) => <h2>{course}</h2>;', '', 'export const Dashboard = () => {', "  const course = 'Props';", '  return <CourseTitle course={course} />;', '};'], ['{\\s*course\\s*}', '<CourseTitle\\s+course=', '\(\\{\\s*course\\s*\\}\\)'], 'El valor course se declara arriba, se pasa como course={course} y se recibe en el hijo.'),
    },
    {
        id: 'callbacks', number: '06', title: 'Callbacks: hijo a padre', summary: 'Para comunicar una acción hacia arriba, el padre entrega una función callback y el hijo la invoca.',
        concepts: [['Callback', 'Una función enviada como prop para responder a un evento.'], ['Evento local', 'El hijo controla el click, input u otra interacción.'], ['Estado arriba', 'El padre decide cómo actualizar sus datos.'], ['Nombres', 'onSave, onDelete y onSelect comunican la intención.']],
        example: lines(['const SaveButton = ({ onSave }) => <button onClick={onSave}>Guardar</button>;', '', 'export const App = () => {', '  const handleSave = () => console.log("Guardado");', '  return <SaveButton onSave={handleSave} />;', '};']),
        exercise: validationExercise('Notifica un click al padre', 'Pasa handleSelect como onSelect a TopicButton e invócalo al hacer click.', ['const TopicButton = () => <button>{/* seleccionar */}</button>;', '', 'export const App = () => {', "  const handleSelect = () => console.log('Tema seleccionado');", '  return <TopicButton />;', '};'], ['const TopicButton = ({ onSelect }) => <button onClick={onSelect}>Seleccionar</button>;', '', 'export const App = () => {', "  const handleSelect = () => console.log('Tema seleccionado');", '  return <TopicButton onSelect={handleSelect} />;', '};'], ['onClick={\\s*onSelect\\s*}', '<TopicButton\\s+onSelect=', '\(\\{\\s*onSelect\\s*\\}\\)'], 'El padre pasa la función sin paréntesis. El hijo la asigna a onClick.'),
    },
    {
        id: 'lifting-state', number: '07', title: 'Elevacion de estado', summary: 'Cuando varios componentes necesitan los mismos datos, el estado sube al ancestro común más cercano.',
        concepts: [['Ancestro común', 'Es el componente que puede compartir datos con todos los interesados.'], ['Estado único', 'Evita copias desincronizadas del mismo dato.'], ['Props hacia abajo', 'El valor y las callbacks se distribuyen a los hijos.'], ['Eventos hacia arriba', 'Los hijos solicitan cambios mediante callbacks.']],
        example: lines(['export const App = () => {', '  const [query, setQuery] = useState("");', '  return <><Search value={query} onChange={setQuery} /><Results query={query} /></>;', '};']),
        exercise: validationExercise('Centraliza el estado de búsqueda', 'Declara query en App y pasa value y onChange a Search.', ['export const App = () => {', '  // declara query', '  return <Search />;', '};'], ['export const App = () => {', '  const [query, setQuery] = useState("");', '  return <Search value={query} onChange={setQuery} />;', '};'], ['useState', 'value={\\s*query\\s*}', 'onChange={\\s*setQuery\\s*}'], 'useState vive en el padre. El valor baja y la función de actualización también.'),
    },
    {
        id: 'composition', number: '08', title: 'Composicion de componentes', summary: 'La composición construye interfaces complejas a partir de componentes pequeños y enfocados.',
        concepts: [['Especialización', 'Un componente base recibe contenido o configuración específica.'], ['Layouts', 'Los componentes de layout organizan regiones de la interfaz.'], ['Evitar herencia', 'En React se prefiere combinar componentes en lugar de extender clases.'], ['API pequeña', 'Pocas props claras hacen más fácil reutilizar un componente.']],
        example: lines(['const Layout = ({ header, children, footer }) => (', '  <><header>{header}</header><main>{children}</main><footer>{footer}</footer></>', ');']),
        exercise: validationExercise('Compón una página con Layout', 'Usa Layout y children para envolver el contenido principal de la página.', ['const Layout = ({ children }) => <main>{children}</main>;', '', 'export const Page = () => (', '  {/* usa Layout aquí */}', ');'], ['const Layout = ({ children }) => <main>{children}</main>;', '', 'export const Page = () => (', '  <Layout>', '    <h1>Props y Comunicación</h1>', '    <p>Componentes compuestos.</p>', '  </Layout>', ');'], ['<Layout>', '</Layout>', 'children'], 'Layout ya recibe children. Abre <Layout>, añade contenido dentro y ciérralo.'),
    },
];

const explanations = {
    props: ['Una prop es un dato que un componente recibe desde quien lo usa. El hijo la puede leer para decidir qué mostrar, pero no debe cambiarla.', 'Esta dirección única, padre a hijo, hace más fácil saber de dónde viene cada dato y reutilizar el mismo componente con valores distintos.'],
    'default-props': ['No todos los datos son obligatorios. Un valor por defecto mantiene útil el componente cuando una prop no llega.', 'El valor enviado por el padre siempre tiene prioridad sobre el valor por defecto.'],
    'destructuring-props': ['Desestructurar declara de forma visible qué datos necesita el componente. Evita repetir props.nombre y mejora la lectura.', 'Extrae solo las propiedades que realmente necesita la interfaz.'],
    children: ['children es la prop que React crea con el contenido entre la apertura y el cierre de un componente.', 'El componente aporta la estructura y quien lo usa decide el contenido. Esto es composición, no una excepción especial.'],
    'parent-child': ['El padre conserva el dato compartido y lo baja por props. El hijo lo presenta sin convertirse en otra fuente de verdad.', 'Cuando el dato cambia arriba, React vuelve a renderizar al hijo con el nuevo valor.'],
    callbacks: ['Un hijo no modifica los datos del padre. En su lugar recibe una función como prop y la llama cuando ocurre su evento.', 'Nombres como onSelect indican que se espera una acción; handleSelect indica que la función la gestiona.'],
    'lifting-state': ['Si dos componentes necesitan el mismo dato, ese dato debe vivir en su ancestro común más cercano.', 'El valor baja por props y las funciones para pedir cambios también. Así evitas copias que se desincronizan.'],
    composition: ['Combinar componentes pequeños es la forma habitual de crear interfaces grandes en React.', 'Una API pequeña de props y children es más fácil de reutilizar y entender que una jerarquía compleja.'],
};

const commonMistakes = ['Modificar una prop dentro del componente hijo.', 'Duplicar el mismo dato en dos componentes hermanos.', 'Ejecutar un callback durante el render en lugar de pasarlo al evento.'];

propsCommunicationLessons.forEach(lesson => {
    const original = lesson.exercise;
    lesson.category = 'Flujo de datos';
    lesson.objectives = [`Explicar el papel de ${lesson.title.toLowerCase()} en React.`, 'Escribir una solución pequeña y comprobar su flujo de datos.', 'Reconocer una implementación que rompería el flujo unidireccional.'];
    lesson.explanation = explanations[lesson.id];
    lesson.commonMistakes = commonMistakes;
    lesson.exercises = [
        { ...original, id: `${lesson.id}-1`, level: '1. Analiza', title: `Lee el ejemplo de ${lesson.title}`, instructions: `Reescribe la solución guiada y explica qué recibe cada componente. ${original.instructions}` },
        { ...original, id: `${lesson.id}-2`, level: '2. Aplica' },
        { ...original, id: `${lesson.id}-3`, level: '3. Corrige', title: `Repara el flujo de ${lesson.title}`, instructions: `Parte de la plantilla y elimina cualquier dato duplicado. ${original.instructions}` },
        { ...original, id: `${lesson.id}-4`, level: '4. Construye', title: `Construye con ${lesson.title}`, instructions: `Sin consultar el ejemplo, crea la solución desde los requisitos: ${original.instructions}` },
    ];
});

propsCommunicationLessons.finalChallenge = {
    title: 'Selector de cursos compuesto',
    summary: 'Conecta un padre que conserva la selección con componentes hijos que reciben datos y notifican una acción mediante callbacks.',
    requirements: ['Crea CourseCard y CourseList.', 'Pasa un curso por props.', 'Pasa onSelect como callback.', 'Renderiza cursos con map y key.', 'Muestra el curso seleccionado en App.'],
    exercise: validationExercise('Construye el selector', 'Compón App, CourseList y CourseCard. Usa props para bajar course y onSelect; el hijo debe llamar onSelect al hacer click.', ['import { useState } from \'react\';', '', "const courses = [{ id: 1, title: 'JSX' }, { id: 2, title: 'Props' }];", '', '// Crea CourseCard y CourseList', '', 'export const App = () => {', '  // conserva selectedCourse', '  return <main>{/* lista y selección */}</main>;', '};'], ['import { useState } from \'react\';', '', "const courses = [{ id: 1, title: 'JSX' }, { id: 2, title: 'Props' }];", '', 'const CourseCard = ({ course, onSelect }) => <button onClick={() => onSelect(course)}>{course.title}</button>;', 'const CourseList = ({ courses, onSelect }) => <section>{courses.map(course => <CourseCard key={course.id} course={course} onSelect={onSelect} />)}</section>;', '', 'export const App = () => {', '  const [selectedCourse, setSelectedCourse] = useState(null);', '  return <main><CourseList courses={courses} onSelect={setSelectedCourse} /><p>{selectedCourse ? selectedCourse.title : \'Elige un curso\'}</p></main>;', '};'], ['useState', 'CourseCard', 'CourseList', 'onSelect', 'map', 'key', 'course.id'], 'Crea primero la tarjeta, después la lista y por último el estado compartido en App.'),
};
