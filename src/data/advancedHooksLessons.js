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

export const advancedHooksLessons = [
    {
        id: 'hook-rules', number: '01', title: 'Reglas de los hooks', summary: 'Los hooks deben llamarse en el nivel superior de componentes React o de otros hooks personalizados, siempre en el mismo orden.',
        concepts: [['Nivel superior', 'No llames hooks dentro de bucles, condiciones o funciones anidadas.'], ['Componentes React', 'Los hooks solo funcionan en componentes funcionales o hooks personalizados.'], ['Orden estable', 'React relaciona cada hook con su posición durante el renderizado.'], ['Lint', 'eslint-plugin-react-hooks detecta incumplimientos comunes.']],
        example: lines(['const Profile = ({ isOpen }) => {', '  const [name, setName] = useState("");', '', '  if (!isOpen) return null;', '  return <input value={name} onChange={event => setName(event.target.value)} />;', '};']),
        exercise: exercise('Mantén useState fuera de la condición', 'Declara useState antes del if y muestra null cuando isOpen sea false.', ['const Panel = ({ isOpen }) => {', '  if (!isOpen) {', '    // declara el estado aquí', '    return null;', '  }', '  return <p>Abierto</p>;', '};'], ['const Panel = ({ isOpen }) => {', '  const [count, setCount] = useState(0);', '  if (!isOpen) return null;', '  return <p>Abierto: {count}</p>;', '};'], ['useState', 'if\\s*\\(!isOpen\\)', '{\\s*count\\s*}'], 'Los hooks se declaran antes de cualquier retorno condicional.'),
    },
    {
        id: 'use-ref', number: '02', title: 'useRef', summary: 'useRef conserva un valor mutable entre renderizados sin provocar un nuevo render y permite referenciar nodos del DOM.',
        concepts: [['current', 'La propiedad current guarda el valor o elemento referenciado.'], ['DOM', 'Puedes enfocar un input, medir un elemento o controlar media.'], ['Sin render', 'Cambiar ref.current no actualiza la interfaz.'], ['Persistencia', 'El objeto ref es estable durante la vida del componente.']],
        example: lines(['const inputRef = useRef(null);', '', 'const focusInput = () => inputRef.current.focus();', '', 'return <><input ref={inputRef} /><button onClick={focusInput}>Enfocar</button></>;']),
        exercise: exercise('Enfoca un input con useRef', 'Crea inputRef, asígnalo al input y usa current.focus() desde el botón.', ['export const Search = () => {', '  // crea inputRef', '  const focusSearch = () => {', '    // enfoca el input', '  };', '  return <><input /><button onClick={focusSearch}>Buscar</button></>;', '};'], ['export const Search = () => {', '  const inputRef = useRef(null);', '  const focusSearch = () => {', '    inputRef.current.focus();', '  };', '  return <><input ref={inputRef} /><button onClick={focusSearch}>Buscar</button></>;', '};'], ['useRef', 'ref={\\s*inputRef\\s*}', 'inputRef\\.current\\.focus'], 'Pasa el objeto ref al atributo ref; el nodo estará disponible en inputRef.current.'),
    },
    {
        id: 'use-memo', number: '03', title: 'useMemo', summary: 'useMemo memoriza el resultado de un cálculo costoso hasta que cambian sus dependencias.',
        concepts: [['Valor memorizado', 'Guarda un resultado calculado, no una función.'], ['Dependencias', 'El cálculo se repite cuando alguno de esos valores cambia.'], ['Costo real', 'Úsalo para cálculos medidos como costosos, no por defecto.'], ['Renderizado', 'Evita repetir trabajo cuando cambian datos no relacionados.']],
        example: lines(['const visibleCourses = useMemo(', '  () => courses.filter(course => course.level === level),', '  [courses, level],', ');']),
        exercise: exercise('Memoriza una lista filtrada', 'Usa useMemo para filtrar courses por el valor level.', ['const visibleCourses = /* usa useMemo */;', '', 'return <p>{visibleCourses.length}</p>;'], ['const visibleCourses = useMemo(', '  () => courses.filter(course => course.level === level),', '  [courses, level],', ');', '', 'return <p>{visibleCourses.length}</p>;'], ['useMemo', 'courses\\.filter', '\[courses, level\]'], 'El primer argumento es una función que calcula; el segundo es el array de dependencias.'),
    },
    {
        id: 'use-callback', number: '04', title: 'useCallback', summary: 'useCallback memoriza una función para conservar su referencia mientras sus dependencias no cambien.',
        concepts: [['Referencia', 'Cada render crea funciones nuevas salvo que las memorices.'], ['Componentes memoizados', 'Es útil cuando una función se pasa a un hijo con React.memo.'], ['Dependencias', 'Incluye los valores que lee el callback.'], ['Criterio', 'No lo uses sin una medición o un caso de referencia estable.']],
        example: lines(['const handleDelete = useCallback(id => {', '  setTasks(currentTasks => currentTasks.filter(task => task.id !== id));', '}, []);']),
        exercise: exercise('Memoriza un callback de borrado', 'Envuelve handleDelete en useCallback y elimina una tarea con filter.', ['const handleDelete = id => {', '  setTasks(tasks.filter(task => task.id !== id));', '};'], ['const handleDelete = useCallback(id => {', '  setTasks(currentTasks => currentTasks.filter(task => task.id !== id));', '}, []);'], ['useCallback', 'filter', '\[\]'], 'useCallback recibe la función y sus dependencias. El actualizador funcional evita depender de tasks.'),
    },
    {
        id: 'use-reducer', number: '05', title: 'useReducer', summary: 'useReducer organiza transiciones de estado complejas mediante acciones explícitas y una función reducer pura.',
        concepts: [['Reducer', 'Recibe el estado actual y una acción, y devuelve el estado siguiente.'], ['Dispatch', 'Envía acciones que describen qué ocurrió.'], ['Action', 'Objeto con type y, opcionalmente, datos adicionales.'], ['Escala', 'Es útil cuando muchas acciones actualizan un estado relacionado.']],
        example: lines(['const reducer = (state, action) => {', '  if (action.type === "increment") return { count: state.count + 1 };', '  return state;', '};', '', 'const [state, dispatch] = useReducer(reducer, { count: 0 });']),
        exercise: exercise('Envía una acción increment', 'Crea un reducer para increment y dispara dispatch desde un botón.', ['const reducer = (state, action) => {', '  // maneja increment', '};', '', 'export const Counter = () => {', '  // usa useReducer', '  return <button>Incrementar</button>;', '};'], ['const reducer = (state, action) => {', '  if (action.type === "increment") return { count: state.count + 1 };', '  return state;', '};', '', 'export const Counter = () => {', '  const [state, dispatch] = useReducer(reducer, { count: 0 });', '  return <button onClick={() => dispatch({ type: "increment" })}>{state.count}</button>;', '};'], ['useReducer', 'dispatch', 'type:', 'increment'], 'El reducer no modifica state: devuelve un objeto nuevo para cada acción.'),
    },
    {
        id: 'use-context', number: '06', title: 'useContext', summary: 'useContext permite compartir un valor con muchos componentes sin pasar props manualmente por cada nivel intermedio.',
        concepts: [['Contexto', 'Contenedor de un valor compartido creado con createContext.'], ['Provider', 'Entrega el valor a todo su árbol descendiente.'], ['useContext', 'Lee el valor del contexto más cercano.'], ['Alcance', 'Úsalo para datos globales de interfaz o sesión, no para todo estado local.']],
        example: lines(['const ThemeContext = createContext("light");', '', 'const ThemeLabel = () => {', '  const theme = useContext(ThemeContext);', '  return <p>Tema: {theme}</p>;', '};']),
        exercise: exercise('Lee el tema desde contexto', 'Crea ThemeContext, envuelve con Provider y lee el tema con useContext.', ['// crea ThemeContext', '', 'const ThemeLabel = () => {', '  // lee theme', '  return <p>Tema</p>;', '};'], ['const ThemeContext = createContext("light");', '', 'const ThemeLabel = () => {', '  const theme = useContext(ThemeContext);', '  return <p>Tema: {theme}</p>;', '};'], ['createContext', 'useContext', 'ThemeContext'], 'createContext define el contexto. useContext recibe ese mismo objeto.'),
    },
    {
        id: 'custom-hooks', number: '07', title: 'Hooks personalizados', summary: 'Un hook personalizado extrae lógica con estado y efectos para reutilizarla entre componentes.',
        concepts: [['Prefijo use', 'El nombre debe empezar por use para que las reglas de hooks funcionen.'], ['Composición', 'Un hook puede usar useState, useEffect y otros hooks.'], ['API', 'Devuelve los datos y funciones que necesita el componente.'], ['Reutilización', 'Evita duplicar lógica de comportamiento entre pantallas.']],
        example: lines(['const useToggle = initialValue => {', '  const [value, setValue] = useState(initialValue);', '  const toggle = () => setValue(currentValue => !currentValue);', '  return { value, toggle };', '};']),
        exercise: exercise('Extrae un hook useToggle', 'Crea useToggle que devuelva value y toggle usando useState.', ['const useToggle = initialValue => {', '  // estado y función toggle', '};'], ['const useToggle = initialValue => {', '  const [value, setValue] = useState(initialValue);', '  const toggle = () => setValue(currentValue => !currentValue);', '  return { value, toggle };', '};'], ['useToggle', 'useState', 'setValue', 'return'], 'La función empieza por use y devuelve una API pequeña para el componente.'),
    },
    {
        id: 'global-state', number: '08', title: 'Manejo de estado global simple', summary: 'Para valores compartidos como sesión, tema o idioma, combina contexto con un Provider que expone una API mínima.',
        concepts: [['Estado local', 'Debe seguir dentro del componente cuando solo lo usa ese componente.'], ['Estado global', 'Se comparte entre partes distantes de la aplicación.'], ['Provider propio', 'Encapsula el valor y las operaciones del contexto.'], ['Límites', 'Divide contextos por dominio para evitar renders innecesarios.']],
        example: lines(['const AuthContext = createContext(null);', '', 'const AuthProvider = ({ children }) => {', '  const [user, setUser] = useState(null);', '  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;', '};']),
        exercise: exercise('Expone sesión mediante un Provider', 'Crea AuthProvider que guarde user y lo comparta junto con setUser.', ['const AuthContext = createContext(null);', '', 'const AuthProvider = ({ children }) => {', '  // estado y Provider', '};'], ['const AuthContext = createContext(null);', '', 'const AuthProvider = ({ children }) => {', '  const [user, setUser] = useState(null);', '  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;', '};'], ['AuthContext\\.Provider', 'value=', 'useState', 'children'], 'El Provider recibe children y expone un objeto con los valores compartidos.'),
    },
];
