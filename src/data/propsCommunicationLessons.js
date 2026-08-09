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
