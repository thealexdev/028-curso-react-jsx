const lines = parts => parts.join('\n');
const lesson = (number, id, title, summary, example) => ({ id, number: String(number).padStart(2, '0'), title, summary, concepts: [['Entrega', summary], ['Criterio', 'Implementa una versión pequeña y funcional antes de añadir complejidad.']], example, exercise: { title: `Planifica: ${title}`, instructions: 'Completa el patrón de implementación del proyecto final.', language: 'jsx', initialCode: '// Escribe aquí tu solución', solution: example, patterns: ['const|export|return'], hint: 'Divide el proyecto en entregas pequeñas y verificables.', execution: 'validation' } });
export const finalProjectBlock = { number: 13, title: 'Proyecto Final', summary: 'Integra todos los bloques en una aplicación React real, probada y desplegada.', lessons: [
lesson(1, 'authentication', 'Aplicación con autenticación', 'Implementa inicio de sesión, sesión persistente y cierre de sesión.', lines(['const login = async credentials => api.post("/login", credentials);'])),
lesson(2, 'crud-api', 'CRUD conectado a API', 'Crea, consulta, actualiza y elimina recursos mediante servicios HTTP.', lines(['const createCourse = data => api.post("/courses", data);'])),
lesson(3, 'protected-project-routes', 'Rutas protegidas', 'Restringe el panel y formularios de gestión a usuarios autenticados.', lines(['return user ? children : <Navigate to="/login" replace />;'])),
lesson(4, 'user-dashboard', 'Panel de usuario', 'Diseña una pantalla que reúna datos, acciones y progreso relevantes.', lines(['export const Dashboard = () => <main><h1>Mi panel</h1></main>;'])),
lesson(5, 'validated-project-forms', 'Formularios validados', 'Valida entradas del CRUD y muestra errores accionables.', lines(['const schema = z.object({ title: z.string().min(3) });'])),
lesson(6, 'project-global-state', 'Estado global', 'Comparte sesión, preferencias y datos necesarios con contexto o store.', lines(['const [user, setUser] = useState(null);'])),
lesson(7, 'tailwind-project-design', 'Diseño responsive con Tailwind', 'Construye una interfaz coherente desde móvil usando utilidades y componentes.', lines(['<main className="mx-auto max-w-6xl px-4 py-8">Contenido</main>'])),
lesson(8, 'main-tests', 'Tests principales', 'Cubre autenticación, CRUD y navegación antes de publicar.', lines(['test("crea un curso", async () => { /* flujo principal */ });'])),
lesson(9, 'deployment', 'Despliegue en Vercel, Netlify o GitHub Pages', 'Genera el build y configura variables de entorno en la plataforma elegida.', lines(['npm run build', '# publica la carpeta dist'])),
] };
