const fs = require("fs");

// 1. Criar arquivo JSON
const dadosIniciais = {
    nome: "Fernando",
    idade: 30
};

fs.writeFileSync("dados.json", JSON.stringify(dadosIniciais, null, 2));
console.log("JSON criado.");

// 2. Abrir e ler o JSON
let dados = JSON.parse(fs.readFileSync("dados.json", "utf8"));
console.log("JSON lido:", dados);

// usando fetch -> ideal para servidores.
// let resposta = await fetch("dados.json");
// let dados = await resposta.json();


// 3. Modificar o JSON
dados.idade = 31;
dados.profissao = "Desenvolvedor";

// 4. Salvar novamente
fs.writeFileSync("dados.json", JSON.stringify(dados, null, 2));
console.log("JSON modificado e salvo.");
