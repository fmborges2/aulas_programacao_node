// Lista de objetos (cada objeto representa um usuário)
const usuarios = [
  { id: 1, nome: "Ana", cargo: "Analista" },
  { id: 2, nome: "Bruno", cargo: "Gerente" },
  { id: 3, nome: "Carla", cargo: "Assistente" },
  { id: 4, nome: "Diego", cargo: "Supervisor" }
];

console.log("Lista inicial:");
console.log(usuarios);

// ===============================
// 1) Encontrar um usuário pelo ID
// ===============================

const idProcurado = 3;

const usuarioEncontrado = usuarios.find(u => u.id === idProcurado);

console.log("\nUsuário encontrado com find():");
console.log(usuarioEncontrado);

// ===============================
// 2) Remover um usuário pelo ID
// ===============================

const idRemover = 2;

const novaLista = usuarios.filter(u => u.id !== idRemover);

console.log("\nLista após remover com filter():");
console.log(novaLista);
