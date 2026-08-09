const lines = parts => parts.join('\n');

const exercise = (title, instructions, initialCode, solution, patterns, hint) => ({
    title,
    instructions,
    language: 'jsx',
    initialCode: lines(initialCode),
    solution: lines(solution),
    patterns,
    hint,
    execution: 'validation',
});

export const stateEventsLessons = [
    {
        id: 'events', number: '01', title: 'Eventos en React', summary: 'Los eventos conectan una interacción de la interfaz con una función de JavaScript.',
        concepts: [['Sintaxis JSX', 'Los eventos usan camelCase, por ejemplo onClick y onChange.'], ['Referencia', 'Pasa la función sin ejecutarla: onClick={handleClick}.'], ['SyntheticEvent', 'React normaliza los eventos del navegador.'], ['Handlers', 'Nombra los manejadores según la acción: handleSave o handleDelete.']],
        example: lines(['const handleClick = () => console.log("Click");', '', 'export const Button = () => <button onClick={handleClick}>Guardar</button>;']),
        exercise: exercise('Conecta un evento click', 'Crea handleClick y asígnalo al botón mediante onClick.', ['export const Button = () => {', '  // declara handleClick', '  return <button>{/* guardar */}</button>;', '};'], ['export const Button = () => {', "  const handleClick = () => console.log('Guardado');", '  return <button onClick={handleClick}>Guardar</button>;', '};'], ['handleClick', 'onClick={\\s*handleClick\\s*}'], 'Declara la función dentro del componente y referencia su nombre en onClick.'),
    },
    {
        id: 'use-state', number: '02', title: 'Hook useState', summary: 'useState guarda datos entre renderizados y proporciona una función para actualizarlos.',
        concepts: [['Estado', 'Dato que puede cambiar y afecta a la interfaz.'], ['Setter', 'Función que programa una actualización de estado.'], ['Renderizado', 'React vuelve a renderizar cuando el estado cambia.'], ['Valor inicial', 'useState recibe el primer valor del estado.']],
        example: lines(['import { useState } from "react";', '', 'const Counter = () => {', '  const [count, setCount] = useState(0);', '  return <button onClick={() => setCount(count + 1)}>{count}</button>;', '};']),
        exercise: exercise('Crea un contador con estado', 'Importa useState, declara count y actualízalo al pulsar el botón.', ['import { useState } from "react";', '', 'export const Counter = () => {', '  // declara count', '  return <button>0</button>;', '};'], ['import { useState } from "react";', '', 'export const Counter = () => {', '  const [count, setCount] = useState(0);', '  return <button onClick={() => setCount(count + 1)}>{count}</button>;', '};'], ['useState', 'setCount', 'onClick', '{\\s*count\\s*}'], 'useState devuelve un par: el valor actual y una función para cambiarlo.'),
    },
    {
        id: 'controlled-inputs', number: '03', title: 'Inputs controlados', summary: 'Un input controlado obtiene su valor del estado y comunica cambios mediante onChange.',
        concepts: [['value', 'React controla el texto visible del input.'], ['onChange', 'Recibe cada cambio que hace la persona usuaria.'], ['event.target.value', 'Contiene el texto actual del campo.'], ['Fuente única', 'El estado es la única fuente de verdad del formulario.']],
        example: lines(['const [name, setName] = useState("");', '', '<input value={name} onChange={event => setName(event.target.value)} />']),
        exercise: exercise('Controla un campo de nombre', 'Declara name, asigna value al input y actualízalo con onChange.', ['export const NameField = () => {', '  // estado name', '  return <input placeholder="Tu nombre" />;', '};'], ['export const NameField = () => {', '  const [name, setName] = useState("");', '  return <input value={name} onChange={event => setName(event.target.value)} placeholder="Tu nombre" />;', '};'], ['useState', 'value={\\s*name\\s*}', 'onChange', 'event\\.target\\.value'], 'El campo lee name con value y escribe mediante setName(event.target.value).'),
    },
    {
        id: 'forms', number: '04', title: 'Formularios', summary: 'Los formularios se manejan con onSubmit para controlar el envío y evitar la recarga del navegador.',
        concepts: [['onSubmit', 'Centraliza la acción de enviar el formulario.'], ['preventDefault', 'Evita el comportamiento nativo de recargar la página.'], ['Validación', 'Comprueba datos antes de enviarlos a un servicio.'], ['Botón submit', 'Dispara el onSubmit del formulario padre.']],
        example: lines(['const handleSubmit = event => {', '  event.preventDefault();', '  console.log("Enviar datos");', '};', '', 'return <form onSubmit={handleSubmit}><button type="submit">Enviar</button></form>;']),
        exercise: exercise('Maneja el envío del formulario', 'Crea handleSubmit, usa preventDefault y conéctalo al form.', ['export const Signup = () => {', '  // handleSubmit', '  return <form><button type="submit">Registrarme</button></form>;', '};'], ['export const Signup = () => {', '  const handleSubmit = event => {', '    event.preventDefault();', "    console.log('Formulario enviado');", '  };', '  return <form onSubmit={handleSubmit}><button type="submit">Registrarme</button></form>;', '};'], ['preventDefault', '<form\\s+onSubmit=', 'handleSubmit'], 'onSubmit va en form. Dentro del handler llama event.preventDefault().'),
    },
    {
        id: 'objects-arrays', number: '05', title: 'Estado con objetos y arrays', summary: 'El estado puede contener estructuras complejas, siempre que las actualices creando una nueva referencia.',
        concepts: [['Objetos', 'Agrupan datos relacionados como name, email y role.'], ['Arrays', 'Representan colecciones como tareas, productos o mensajes.'], ['map', 'Transforma elementos sin modificar el array original.'], ['filter', 'Crea un array nuevo sin los elementos que no cumplen una condición.']],
        example: lines(['const [user, setUser] = useState({ name: "Ana", role: "Student" });', '', 'setUser({ ...user, role: "Developer" });']),
        exercise: exercise('Actualiza una propiedad de objeto', 'Conserva user y cambia solamente role a Developer usando spread.', ['const [user, setUser] = useState({ name: "Ana", role: "Student" });', '', '// actualiza role'], ['const [user, setUser] = useState({ name: "Ana", role: "Student" });', '', 'setUser({ ...user, role: "Developer" });'], ['setUser', '\\.\\.\\.user', 'role'], 'Crea un objeto nuevo: { ...user, role: "Developer" }.'),
    },
    {
        id: 'immutable-updates', number: '06', title: 'Actualizaciones inmutables', summary: 'No modifiques el estado existente. Crea una copia con el cambio para que React detecte la nueva referencia.',
        concepts: [['Inmutabilidad', 'El valor anterior no se altera directamente.'], ['Spread', 'Copia arrays u objetos antes de cambiar una parte.'], ['Actualizador funcional', 'Usa el valor previo cuando depende del estado anterior.'], ['Previsibilidad', 'Las copias hacen más fácil entender y depurar cambios.']],
        example: lines(['setTasks(currentTasks => [', '  ...currentTasks,', '  { id: 3, title: "Practicar useState" },', ']);']),
        exercise: exercise('Agrega una tarea sin mutar', 'Usa el actualizador funcional y spread para añadir una nueva tarea a tasks.', ['const [tasks, setTasks] = useState([]);', '', '// agrega una tarea con id y title'], ['const [tasks, setTasks] = useState([]);', '', 'setTasks(currentTasks => [', '  ...currentTasks,', '  { id: 1, title: "Practicar useState" },', ']);'], ['setTasks\\s*\\(', 'currentTasks', '\\.\\.\\.currentTasks'], 'El setter puede recibir una función. Esta recibe el estado anterior y devuelve el array nuevo.'),
    },
    {
        id: 'state-rendering', number: '07', title: 'Renderizado basado en estado', summary: 'La interfaz es una función del estado: cuando los datos cambian, React calcula qué debe mostrarse.',
        concepts: [['UI declarativa', 'Describe cómo se ve cada estado posible.'], ['Condicional', 'Elige una interfaz para carga, error, vacío o éxito.'], ['Derivación', 'Calcula valores desde el estado en lugar de duplicarlos.'], ['Estados vacíos', 'Diseña qué mostrar cuando aún no hay datos.']],
        example: lines(['return tasks.length === 0', '  ? <p>No hay tareas.</p>', '  : <ul>{tasks.map(task => <li key={task.id}>{task.title}</li>)}</ul>;']),
        exercise: exercise('Muestra un estado vacío', 'Renderiza No hay tareas cuando tasks.length sea 0; si no, renderiza una lista.', ['const tasks = [];', '', 'export const TaskList = () => {', '  return <>{/* condición */}</>;', '};'], ['const tasks = [];', '', 'export const TaskList = () => {', '  return <>{tasks.length === 0 ? <p>No hay tareas.</p> : <ul>{tasks.map(task => <li key={task.id}>{task.title}</li>)}</ul>}</>;', '};'], ['tasks\\.length\\s*===\\s*0', '\\?', ':', 'tasks\\.map'], 'Usa un ternario: tasks.length === 0 ? contenido vacío : lista.'),
    },
    {
        id: 'practice', number: '08', title: 'Ejercicios: contadores, visibilidad y colores', summary: 'Combina eventos y estado en pequeñas interacciones para consolidar el modelo mental de React.',
        concepts: [['Contador', 'Practica un número que depende de una acción.'], ['Visibilidad', 'Practica un booleano que decide qué elemento se muestra.'], ['Color', 'Practica estado que controla estilos derivados.'], ['Siguiente paso', 'Separa cada interacción en un componente pequeño.']],
        example: lines(['const [visible, setVisible] = useState(true);', '', '<button onClick={() => setVisible(!visible)}>Alternar</button>', '{visible && <p>Contenido visible</p>}']),
        exercise: exercise('Alterna la visibilidad', 'Declara visible con useState(true), agrega un botón y muestra el mensaje solo cuando visible sea true.', ['export const Visibility = () => {', '  // estado visible', '  return <section>{/* botón y mensaje */}</section>;', '};'], ['export const Visibility = () => {', '  const [visible, setVisible] = useState(true);', '  return <section>', '    <button onClick={() => setVisible(!visible)}>Alternar</button>', '    {visible && <p>Contenido visible</p>}', '  </section>;', '};'], ['useState\\(true\\)', 'setVisible', '&&', 'visible'], 'El operador && renderiza el párrafo solo si visible es true.'),
    },
];
