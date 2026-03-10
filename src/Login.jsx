import { useState } from "react";
// Componentes do Material UI
import {
Container, // Centraliza o conteúdo na tela
TextField, // Campo de entrada estilizado
Button, // Botão padrão Material Design
Typography, // Texto com padrão de tipografia
Paper, // Cartão com sombra
Box // Layout flexível (substitui div + CSS)
} from "@mui/material";
function Login({ onLogin }) {
// Estados para armazenar os dados digitados
const [usuario, setUsuario] = useState("");
const [senha, setSenha] = useState("");
const [erro, setErro] = useState("");
// Função que envia os dados para o Spring Boot
const autenticar = () => {
fetch("http://localhost:8080/api/login", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ usuario, senha })
})
.then(res => res.json())
.then(data => {
if (data === true) {
onLogin(); // Chama função do App.js para liberar acesso
} else {
setErro("Usuário ou senha inválidos");
}
});
};
return (
// Container centraliza e limita a largura
<Container maxWidth="sm">
{/* Paper cria um cartão com sombra */}
<Paper elevation={3} sx={{ padding: 4, marginTop: 10 }}>
{/* Typography define o estilo do título */}
<Typography variant="h5" gutterBottom>
Tela de Acesso
</Typography>
{/* Box organiza os campos em coluna com espaçamento */}
<Box display="flex" flexDirection="column" gap={2}>
{/* Campo de usuário */}

<TextField
label="Usuário"
variant="outlined"
fullWidth
onChange={(e) => setUsuario(e.target.value)}
/>
{/* Campo de senha */}
<TextField
label="Senha"
type="password"
variant="outlined"
fullWidth
onChange={(e) => setSenha(e.target.value)}
/>
{/* Botão de login */}
<Button variant="contained" onClick={autenticar}>
Entrar
</Button>
{/* Mensagem de erro */}
<Typography color="error">
{erro}
</Typography>
</Box>
</Paper>
</Container>
);
}
export default Login;