const fs = require("fs");

// 1. Criar arquivo TXT
fs.writeFileSync("arquivo.txt", "Conteúdo inicial do arquivo.");
console.log("Arquivo criado.");

// 2. Abrir e ler o arquivo
let conteudo = fs.readFileSync("arquivo.txt", "utf8");
console.log("Conteúdo lido:", conteudo);

// 3. Modificar o conteúdo
conteudo += "\nLinha adicionada após reabrir o arquivo.";

// 4. Salvar novamente
fs.writeFileSync("arquivo.txt", conteudo);
console.log("Arquivo modificado e salvo.");

