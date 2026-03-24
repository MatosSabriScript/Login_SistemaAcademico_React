// ===============================
// 🔗 IMPORTS
// ===============================
// Hooks do React
import { useEffect, useState } from "react";
// Componentes do Material UI
import {
Container,
Typography,
Paper,
TextField,
Snackbar,
Alert,
IconButton,
Button
} from "@mui/material";
// DataGrid (tabela)
import { DataGrid } from "@mui/x-data-grid";
// Ícone de deletar
import DeleteIcon from "@mui/icons-material/Delete";
// 🔗 Import da API (IMPORTANTE: apenas UMA vez)
import { getAlunos, criarAluno, deletarAluno } from "../services/api";
// ===============================
// 🧩 COMPONENTE PRINCIPAL
// ===============================
function Alunos() {
/*
==============================
🧩 ESTADOS
==============================
*/
// Lista de alunos
const [alunos, setAlunos] = useState([]);
// Campo de busca
const [busca, setBusca] = useState("");
// Campos do formulário
const [nome, setNome] = useState("");
const [curso, setCurso] = useState("");
// Controle do alerta (Snackbar)
const [openAlert, setOpenAlert] = useState(false);
const [mensagem, setMensagem] = useState("");
const [tipo, setTipo] = useState("success"); // success | error
/*
==============================
🔄 CARREGAR ALUNOS
==============================
*/
const carregarAlunos = async () => {

try {
const data = await getAlunos();
setAlunos(data);
} catch {
setMensagem("Erro ao carregar dados!");
setTipo("error");
setOpenAlert(true);
}
};
/*
==============================
⚙️ EXECUTA AO ABRIR A TELA
==============================
*/
useEffect(() => {
carregarAlunos();
}, []);
/*
==============================
➕ CRIAR ALUNO
==============================
*/
const handleCriar = async () => {
try {
await criarAluno({ nome, curso });
setMensagem("Aluno criado com sucesso!");
setTipo("success");
setOpenAlert(true);
// Limpa campos
setNome("");
setCurso("");
// Atualiza lista
carregarAlunos();
} catch {
setMensagem("Erro ao criar aluno!");
setTipo("error");
setOpenAlert(true);
}
};
/*
==============================
❌ DELETAR ALUNO
==============================
*/
const handleEliminar = async (id, nome) => {
try {
await deletarAluno(id);
setMensagem(`Aluno ${nome} removido!`);
setTipo("success");
setOpenAlert(true);
carregarAlunos();
} catch {
setMensagem("Erro ao deletar!");
setTipo("error");
setOpenAlert(true);
}
};

/*
==============================
📊 CONFIGURAÇÃO DA TABELA
==============================
*/
const colunas = [
{ field: "matricula", headerName: "ID", flex: 0.5 },
{ field: "nome", headerName: "Nome", flex: 2 },
{ field: "curso", headerName: "Curso", flex: 1 },
{
field: "acoes",
headerName: "Ações",
flex: 0.5,
renderCell: (params) => (
<IconButton
color="error"
onClick={() =>
handleEliminar(params.row.matricula, params.row.nome)
}
>
<DeleteIcon />
</IconButton>
),
},
];
/*
==============================
🔍 FILTRO DE BUSCA
==============================
*/
const alunosFiltrados = alunos.filter((a) =>
a.nome.toLowerCase().includes(busca.toLowerCase())
);
/*
==============================
🎨 RENDERIZAÇÃO
==============================
*/
return (
<Container>
<Typography variant="h4" sx={{ my: 3 }}>
Gestão de Alunos (CRUD)
</Typography>
{/* ================= FORMULÁRIO ================= */}
<TextField
label="Nome"
fullWidth
sx={{ mb: 2 }}
value={nome}
onChange={(e) => setNome(e.target.value)}
/>
<TextField
label="Curso"
fullWidth
sx={{ mb: 2 }}
value={curso}
onChange={(e) => setCurso(e.target.value)}
/>
<Button

variant="contained"
onClick={handleCriar}
sx={{ mb: 3 }}
>
Adicionar Aluno
</Button>
{/* ================= BUSCA ================= */}
<TextField
fullWidth
label="Pesquisar aluno..."
sx={{ mb: 3 }}
onChange={(e) => setBusca(e.target.value)}
/>
{/* ================= TABELA ================= */}
<Paper sx={{ height: 400 }}>
<DataGrid
rows={alunosFiltrados}
columns={colunas}
getRowId={(row) => row.matricula}
/>
</Paper>
{/* ================= ALERTA ================= */}
<Snackbar
open={openAlert}
autoHideDuration={3000}
onClose={() => setOpenAlert(false)}
>
<Alert severity={tipo} variant="filled">
{mensagem}
</Alert>
</Snackbar>
</Container>
);
}
export default Alunos;ault Alunos;