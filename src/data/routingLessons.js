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

export const routingLessons = [
    {
        id: 'react-router', number: '01', title: 'React Router', summary: 'React Router conecta la URL con componentes React para crear una experiencia de varias vistas sin recargar el documento.',
        concepts: [['SPA', 'Una single-page application actualiza vistas sin cargar un HTML nuevo.'], ['URL', 'La ruta expresa qué recurso o pantalla está activa.'], ['react-router-dom', 'Paquete que aporta enrutamiento para aplicaciones web React.'], ['Instalación', 'Añádelo al proyecto con npm install react-router-dom.']],
        example: lines(['npm install react-router-dom', '', 'import { BrowserRouter } from "react-router-dom";']),
        exercise: exercise('Importa el router web', 'Completa la importación de BrowserRouter desde react-router-dom.', ['// importa BrowserRouter', '', 'export const Root = () => <BrowserRouter><App /></BrowserRouter>;'], ['import { BrowserRouter } from "react-router-dom";', '', 'export const Root = () => <BrowserRouter><App /></BrowserRouter>;'], ['BrowserRouter', 'react-router-dom'], 'BrowserRouter es un export nombrado del paquete react-router-dom.'),
    },
    {
        id: 'router-routes-route', number: '02', title: 'BrowserRouter, Routes y Route', summary: 'BrowserRouter habilita el historial del navegador; Routes elige una coincidencia y Route asocia un path con un elemento.',
        concepts: [['BrowserRouter', 'Envuelve la aplicación una sola vez.'], ['Routes', 'Agrupa y resuelve las rutas declaradas.'], ['Route', 'Define path y el componente renderizado para esa URL.'], ['element', 'Recibe JSX, por ejemplo element={<Home />}.']],
        example: lines(['<BrowserRouter>', '  <Routes>', '    <Route path="/" element={<Home />} />', '    <Route path="/about" element={<About />} />', '  </Routes>', '</BrowserRouter>']),
        exercise: exercise('Declara dos rutas', 'Crea la ruta raíz para Home y la ruta /about para About.', ['<BrowserRouter>', '  <Routes>', '    {/* rutas */}', '  </Routes>', '</BrowserRouter>'], ['<BrowserRouter>', '  <Routes>', '    <Route path="/" element={<Home />} />', '    <Route path="/about" element={<About />} />', '  </Routes>', '</BrowserRouter>'], ['<Routes>', '<Route\\s+path=', 'element={'], 'Cada Route necesita un path y un element con el componente JSX.'),
    },
    {
        id: 'dynamic-routes', number: '03', title: 'Rutas dinamicas', summary: 'Una ruta dinámica define un segmento variable de la URL con el prefijo dos puntos.',
        concepts: [['Segmento', 'Cada parte entre barras es un segmento de la URL.'], ['Dos puntos', 'Indican que un segmento es un parámetro dinámico.'], ['Reutilización', 'Una sola ruta atiende muchos recursos, como /products/1 y /products/2.'], ['Diseño URL', 'Los parámetros identifican recursos; las queries suelen filtrar o paginar.']],
        example: lines(['<Route path="/courses/:courseId" element={<CourseDetail />} />']),
        exercise: exercise('Crea una ruta de detalle', 'Declara una ruta que reciba un id dinámico para mostrar ProductDetail.', ['<Routes>', '  {/* detalle de producto */}', '</Routes>'], ['<Routes>', '  <Route path="/products/:id" element={<ProductDetail />} />', '</Routes>'], [':id', 'ProductDetail', '<Route'], 'El parámetro debe empezar con : y su nombre puede ser id.'),
    },
    {
        id: 'use-params', number: '04', title: 'Parametros con useParams', summary: 'useParams lee los valores dinámicos definidos en la ruta actual.',
        concepts: [['Hook', 'useParams devuelve un objeto con los parámetros de URL.'], ['Coincidencia', 'El nombre debe coincidir con :id o :courseId en Route.'], ['Strings', 'Los parámetros llegan como texto; conviértelos si necesitas un número.'], ['Datos', 'Usa el parámetro para buscar o solicitar el recurso adecuado.']],
        example: lines(['import { useParams } from "react-router-dom";', '', 'const ProductDetail = () => {', '  const { id } = useParams();', '  return <h1>Producto {id}</h1>;', '};']),
        exercise: exercise('Lee el parámetro id', 'Importa useParams, extrae id y muéstralo en el encabezado.', ['export const ProductDetail = () => {', '  // extrae id', '  return <h1>Producto</h1>;', '};'], ['import { useParams } from "react-router-dom";', '', 'export const ProductDetail = () => {', '  const { id } = useParams();', '  return <h1>Producto {id}</h1>;', '};'], ['useParams', '{\\s*id\\s*}', '{\\s*id\\s*}'], 'useParams() devuelve un objeto; usa const { id } = useParams().'),
    },
    {
        id: 'navigation', number: '05', title: 'Link, NavLink y useNavigate', summary: 'Usa enlaces declarativos para navegar y useNavigate para redirecciones después de una acción.',
        concepts: [['Link', 'Navega sin recargar la página.'], ['NavLink', 'Añade información de estado para marcar la ruta activa.'], ['useNavigate', 'Devuelve una función para navegar desde código JavaScript.'], ['to', 'Indica el destino de Link y NavLink.']],
        example: lines(['<Link to="/courses">Cursos</Link>', '<NavLink to="/profile">Perfil</NavLink>', '', 'const navigate = useNavigate();', 'navigate("/dashboard");']),
        exercise: exercise('Navega después de guardar', 'Obtén navigate con useNavigate y redirige a /dashboard en handleSave.', ['export const SaveForm = () => {', '  // declara navigate', '  const handleSave = () => {', '    // redirige', '  };', '  return <button onClick={handleSave}>Guardar</button>;', '};'], ['export const SaveForm = () => {', '  const navigate = useNavigate();', '  const handleSave = () => {', '    navigate("/dashboard");', '  };', '  return <button onClick={handleSave}>Guardar</button>;', '};'], ['useNavigate', 'navigate\\(', '/dashboard'], 'useNavigate devuelve una función. Llámala con la URL de destino.'),
    },
    {
        id: 'nested-routes', number: '06', title: 'Rutas anidadas', summary: 'Las rutas anidadas comparten un layout padre y renderizan sus hijos dentro de Outlet.',
        concepts: [['Layout', 'Contiene navegación, cabecera o estructura compartida.'], ['Outlet', 'Marca dónde React Router renderiza el hijo activo.'], ['Ruta hija', 'Su path es relativo a la ruta del padre.'], ['Índice', 'index renderiza la ruta hija predeterminada.']],
        example: lines(['<Route path="/dashboard" element={<DashboardLayout />}>', '  <Route index element={<Overview />} />', '  <Route path="settings" element={<Settings />} />', '</Route>', '', 'const DashboardLayout = () => <main><Outlet /></main>;']),
        exercise: exercise('Anida la ruta de ajustes', 'Crea DashboardLayout con Outlet y anida settings dentro de /dashboard.', ['<Route path="/dashboard" element={<DashboardLayout />}>', '  {/* ruta hija */}', '</Route>', '', 'const DashboardLayout = () => <main>{/* outlet */}</main>;'], ['<Route path="/dashboard" element={<DashboardLayout />}>', '  <Route path="settings" element={<Settings />} />', '</Route>', '', 'const DashboardLayout = () => <main><Outlet /></main>;'], ['<Outlet', 'path="settings"', 'DashboardLayout'], 'El hijo settings no repite /dashboard. Outlet debe estar en el layout.'),
    },
    {
        id: 'not-found', number: '07', title: 'Pagina 404', summary: 'Una ruta comodín muestra una página útil cuando ninguna URL coincide con las rutas conocidas.',
        concepts: [['Comodín', 'El path * coincide con cualquier ruta no resuelta.'], ['Fallback', 'Evita una pantalla vacía ante enlaces incorrectos.'], ['Orientación', 'Incluye un enlace para volver a una sección válida.'], ['Orden', 'Routes selecciona la ruta más específica disponible.']],
        example: lines(['<Route path="*" element={<NotFound />} />', '', 'const NotFound = () => <main><h1>404</h1><Link to="/">Volver al inicio</Link></main>;']),
        exercise: exercise('Añade un fallback 404', 'Declara una ruta comodín que renderice NotFound.', ['<Routes>', '  <Route path="/" element={<Home />} />', '  {/* fallback */}', '</Routes>'], ['<Routes>', '  <Route path="/" element={<Home />} />', '  <Route path="*" element={<NotFound />} />', '</Routes>'], ['path="\\*"', 'NotFound'], 'El asterisco representa toda URL sin una coincidencia más específica.'),
    },
    {
        id: 'protected-routes', number: '08', title: 'Rutas protegidas', summary: 'Una ruta protegida decide si muestra contenido privado o redirige según el estado de autenticación.',
        concepts: [['Autenticación', 'Indica quién es la persona usuaria.'], ['Autorización', 'Decide a qué recursos puede acceder esa persona.'], ['Navigate', 'Redirige declarativamente a otra ruta.'], ['Estado global', 'La sesión suele estar disponible mediante contexto o un store.']],
        example: lines(['const ProtectedRoute = ({ isAuthenticated, children }) => {', '  return isAuthenticated ? children : <Navigate to="/login" replace />;', '};']),
        exercise: exercise('Protege Dashboard', 'Renderiza children cuando isAuthenticated sea true y Navigate a /login cuando sea false.', ['const ProtectedRoute = ({ isAuthenticated, children }) => {', '  // condición', '};'], ['const ProtectedRoute = ({ isAuthenticated, children }) => {', '  return isAuthenticated ? children : <Navigate to="/login" replace />;', '};'], ['isAuthenticated\\s*\\?', '<Navigate', '/login', 'children'], 'El ternario elige children para acceso válido y Navigate para acceso denegado.'),
    },
];
