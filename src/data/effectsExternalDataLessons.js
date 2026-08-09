/* eslint-disable no-useless-escape */
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

export const effectsExternalDataLessons = [
    {
        id: 'use-effect', number: '01', title: 'Hook useEffect', summary: 'useEffect sincroniza un componente con sistemas externos como APIs, temporizadores, suscripciones o el título del documento.',
        concepts: [['Efecto', 'Trabajo que ocurre después de que React actualiza la pantalla.'], ['Importación', 'useEffect se importa desde react junto con otros hooks.'], ['Callback', 'El primer argumento define el trabajo del efecto.'], ['Sincronización', 'Conecta el estado de React con algo fuera de React.']],
        example: lines(['import { useEffect } from "react";', '', 'useEffect(() => {', '  document.title = "Bloque 5";', '});']),
        exercise: exercise('Sincroniza el título del documento', 'Importa useEffect y actualiza document.title dentro de un efecto.', ['import { /* hook */ } from "react";', '', 'export const Title = () => {', '  // crea el efecto', '  return <h1>React / Ruta</h1>;', '};'], ['import { useEffect } from "react";', '', 'export const Title = () => {', '  useEffect(() => {', '    document.title = "React / Ruta";', '  });', '  return <h1>React / Ruta</h1>;', '};'], ['useEffect', 'document\\.title'], 'useEffect recibe una función. Dentro puedes modificar document.title.'),
    },
    {
        id: 'lifecycle', number: '02', title: 'Ciclo de vida en componentes funcionales', summary: 'En componentes funcionales, los efectos modelan el montaje, las actualizaciones y el desmontaje.',
        concepts: [['Montaje', 'El componente aparece por primera vez en la pantalla.'], ['Actualización', 'El componente vuelve a renderizarse por cambios de props o estado.'], ['Desmontaje', 'El componente deja de formar parte de la interfaz.'], ['Array vacío', 'Un efecto con [] se programa tras el montaje.']],
        example: lines(['useEffect(() => {', '  console.log("El componente se montó");', '}, []);']),
        exercise: exercise('Ejecuta un efecto al montar', 'Añade un useEffect con array vacío que escriba Componente listo en consola.', ['export const Welcome = () => {', '  // efecto de montaje', '  return <p>Hola</p>;', '};'], ['export const Welcome = () => {', '  useEffect(() => {', "    console.log('Componente listo');", '  }, []);', '  return <p>Hola</p>;', '};'], ['useEffect', '\[\]'], 'El segundo argumento [] indica que no hay valores observados.'),
    },
    {
        id: 'dependencies', number: '03', title: 'Dependencias de efectos', summary: 'El array de dependencias declara qué valores debe observar un efecto para mantenerse sincronizado.',
        concepts: [['Sin array', 'El efecto se ejecuta después de cada renderizado.'], ['Array vacío', 'El efecto se ejecuta al montar el componente.'], ['Dependencia', 'El efecto se repite cuando ese valor cambia.'], ['Regla de hooks', 'Incluye los valores externos usados dentro del efecto.']],
        example: lines(['useEffect(() => {', '  console.log(`Usuario actualizado: ${user}`);', '}, [user]);']),
        exercise: exercise('Observa el cambio de usuario', 'Completa el array para ejecutar el efecto cuando user cambie.', ['const [user, setUser] = useState("Ana");', '', 'useEffect(() => {', '  console.log(user);', '}, /* dependencias */);'], ['const [user, setUser] = useState("Ana");', '', 'useEffect(() => {', '  console.log(user);', '}, [user]);'], ['useEffect', '\[user\]'], 'Todo valor externo que se lee dentro del efecto debe estar en el array.'),
    },
    {
        id: 'cleanup', number: '04', title: 'Limpieza de efectos', summary: 'Un efecto puede devolver una función de limpieza para detener temporizadores, listeners o suscripciones antes del próximo efecto y al desmontar.',
        concepts: [['Return', 'La función retornada por el efecto es la limpieza.'], ['Listeners', 'Elimina addEventListener para evitar duplicados.'], ['Timers', 'Limpia intervalos y timeouts creados por el componente.'], ['Recursos', 'Evita efectos que sigan activos cuando el componente ya no existe.']],
        example: lines(['useEffect(() => {', '  const timer = setInterval(tick, 1000);', '  return () => clearInterval(timer);', '}, []);']),
        exercise: exercise('Limpia un intervalo', 'Crea un intervalo y devuelve una función que llame clearInterval.', ['useEffect(() => {', '  const timer = setInterval(() => console.log("tick"), 1000);', '  // devuelve la limpieza', '}, []);'], ['useEffect(() => {', '  const timer = setInterval(() => console.log("tick"), 1000);', '  return () => clearInterval(timer);', '}, []);'], ['setInterval', 'return\\s*\\(\\)\\s*=>', 'clearInterval'], 'El callback retornado debe cerrar el recurso usando el identificador timer.'),
    },
    {
        id: 'fetch', number: '05', title: 'Peticiones HTTP con fetch', summary: 'fetch inicia una petición HTTP y devuelve una promesa Response que debes comprobar y convertir a datos.',
        concepts: [['fetch', 'Inicia la petición y devuelve una promesa.'], ['Response', 'Incluye estado, cabeceras y métodos como json().'], ['response.ok', 'Indica si la respuesta HTTP fue exitosa.'], ['async/await', 'Permite leer una petición asíncrona de forma secuencial.']],
        example: lines(['const response = await fetch("https://jsonplaceholder.typicode.com/users");', 'if (!response.ok) throw new Error("Request failed");', 'const users = await response.json();']),
        exercise: exercise('Solicita usuarios con fetch', 'Completa la petición, valida response.ok y transforma la respuesta a JSON.', ['async function loadUsers() {', '  // crea response con await fetch', '  // valida response.ok', '  // devuelve await response.json()', '}'], ['async function loadUsers() {', '  const response = await fetch("https://jsonplaceholder.typicode.com/users");', '  if (!response.ok) throw new Error("Request failed");', '  return await response.json();', '}'], ['await\\s+fetch', 'response\\.ok', 'response\\.json'], 'fetch devuelve Response. El contenido no es JSON hasta llamar y esperar response.json().'),
    },
    {
        id: 'request-status', number: '06', title: 'Estados de carga, error y exito', summary: 'Una petición asíncrona necesita interfaces explícitas para carga, error y datos disponibles.',
        concepts: [['Loading', 'Indica que la petición está en curso.'], ['Error', 'Informa que no se pudieron obtener los datos.'], ['Success', 'Muestra los datos una vez resuelta la petición.'], ['finally', 'Permite finalizar el estado de carga en éxito y fallo.']],
        example: lines(['const [status, setStatus] = useState("idle");', '', 'if (status === "loading") return <p>Cargando...</p>;', 'if (status === "error") return <p>No se pudo cargar.</p>;']),
        exercise: exercise('Renderiza el estado de carga', 'Muestra Cargando... cuando status sea loading y Error cuando sea error.', ['const status = "loading";', '', 'export const RequestStatus = () => {', '  return <>{/* condiciones */}</>;', '};'], ['const status = "loading";', '', 'export const RequestStatus = () => {', '  if (status === "loading") return <p>Cargando...</p>;', '  if (status === "error") return <p>Error</p>;', '  return <p>Listo</p>;', '};'], ['status\\s*===\\s*[\'\"]loading', 'status\\s*===\\s*[\'\"]error'], 'Puedes usar returns tempranos: primero carga, luego error y finalmente el estado exitoso.'),
    },
    {
        id: 'render-api-data', number: '07', title: 'Renderizar datos de una API', summary: 'Una vez cargados, los arrays remotos se convierten en JSX con map y claves estables de la API.',
        concepts: [['Datos remotos', 'Pueden no existir en el primer renderizado.'], ['map', 'Transforma cada objeto en un elemento de interfaz.'], ['key', 'Usa el id remoto para identificar cada elemento.'], ['Defensivo', 'Comprueba que los datos estén disponibles antes de leerlos.']],
        example: lines(['return <ul>{users.map(user => (', '  <li key={user.id}>{user.name}</li>', '))}</ul>;']),
        exercise: exercise('Muestra una lista de usuarios', 'Usa map para renderizar name y email de cada user con key={user.id}.', ['const users = [{ id: 1, name: "Ana", email: "ana@example.com" }];', '', 'export const UserList = () => <ul>{/* usuarios */}</ul>;'], ['const users = [{ id: 1, name: "Ana", email: "ana@example.com" }];', '', 'export const UserList = () => <ul>{users.map(user => <li key={user.id}>{user.name} - {user.email}</li>)}</ul>;'], ['users\\.map', 'key={\\s*user\\.id', 'user\\.name', 'user\\.email'], 'map recibe cada objeto. La key debe usar un id estable, no el índice.'),
    },
    {
        id: 'abort-controller', number: '08', title: 'Cancelar peticiones con AbortController', summary: 'AbortController permite cancelar una petición iniciada por un efecto cuando el componente se desmonta o cambia la consulta.',
        concepts: [['Controller', 'Crea una señal de cancelación para una petición.'], ['signal', 'Se entrega a fetch mediante el objeto de opciones.'], ['abort', 'Cancela la petición pendiente.'], ['Cleanup', 'El efecto devuelve controller.abort como limpieza.']],
        example: lines(['useEffect(() => {', '  const controller = new AbortController();', '  fetch(url, { signal: controller.signal });', '  return () => controller.abort();', '}, [url]);']),
        exercise: exercise('Cancela una petición al desmontar', 'Crea AbortController, pasa signal a fetch y aborta en la limpieza del efecto.', ['useEffect(() => {', '  // crea el controller', '  // usa fetch con signal', '  // devuelve la limpieza', '}, [url]);'], ['useEffect(() => {', '  const controller = new AbortController();', '  fetch(url, { signal: controller.signal });', '  return () => controller.abort();', '}, [url]);'], ['AbortController', 'signal:\\s*controller\\.signal', 'controller\\.abort'], 'Crea el controlador dentro del efecto para que cada petición tenga su propia señal.'),
    },
];
