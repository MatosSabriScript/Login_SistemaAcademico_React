// ===============================
// 🌐 CONFIGURAÇÃO DA API
// ===============================
// URL base do backend
const API_URL = "http://localhost:8080/api/alunos";
/*
==============================
📥 GET - Buscar alunos
==============================
Função responsável por buscar todos os alunos da API
*/
export const getAlunos = async () => {
// Faz requisição HTTP
const response = await fetch(API_URL);
// Verifica se houve erro
if (!response.ok) {
throw new Error("Erro ao buscar alunos");
}
// Converte resposta para JSON
return response.json();
};
/*
==============================
➕ POST - Criar aluno
==============================
Envia um novo aluno para o servidor
*/
export const criarAluno = async (aluno) => {
const response = await fetch(API_URL, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(aluno),
});
if (!response.ok) {
throw new Error("Erro ao criar aluno");
}
return response.json();
};
/*
==============================
❌ DELETE - Remover aluno
==============================
Remove um aluno pelo ID (matricula)
*/

export const deletarAluno = async (id) => {
const response = await fetch(`${API_URL}/${id}`, {
method: "DELETE",
});
if (!response.ok) {
throw new Error("Erro ao deletar aluno");
}
};