// Importação dos componentes do Material UI
// Esses componentes criam a barra superior do sistema
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// Componente Menu recebe uma função chamada onLogout
// Essa função vem do App.js
function Menu({ onLogout }) {
return (
// AppBar cria a barra superior padrão do Material Design
<AppBar position="static">
{/* Toolbar organiza os elementos dentro do menu */}
<Toolbar>
{/* Typography cria o título do sistema */}
{/* flexGrow empurra os botões para o lado direito */}
<Typography variant="h6" sx={{ flexGrow: 1 }}>
Sistema Acadêmico
</Typography>
{/* Botão para ir ao Dashboard */}
<Button color="inherit">
Dashboard
</Button>

{/* Botão para acessar a área de alunos */}
<Button color="inherit">
Alunos
</Button>
{/* Botão de logout */}
{/* Quando clicado executa a função onLogout */}
{/* Essa função altera o estado logado para false */}
<Button color="inherit" onClick={onLogout}>
Sair
</Button>
</Toolbar>
</AppBar>
);
}
// Exporta o componente para ser usado no App.js
export default Menu;0