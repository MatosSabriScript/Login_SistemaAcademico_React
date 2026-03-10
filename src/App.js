
// Importação do hook useState do React
// Ele permite controlar estados dentro do componente
import { useState } from "react";
// Importação dos componentes do sistema
import Login from "./Login";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
// Componente principal da aplicação
function App() {
// Estado que controla se o usuário está logado ou não
// Inicialmente começa como false
const [logado, setLogado] = useState(false);
// Se o usuário NÃO estiver logado
// exibimos apenas a tela de login
if (!logado) {
// onLogin é uma função enviada para o componente Login
// Quando o login for realizado com sucesso
// setLogado(true) será executado

return <Login onLogin={() => setLogado(true)} />;
}
// Se o usuário estiver logado
// exibimos o sistema
return (
<>
{/* Menu superior do sistema */}
{/* onLogout recebe função que altera logado para false */}
<Menu onLogout={() => setLogado(false)} />
{/* Conteúdo principal do sistema */}
<Dashboard />
</>
);
}
// Exportação do componente principal
export default App;