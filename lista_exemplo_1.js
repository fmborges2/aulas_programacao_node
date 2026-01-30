const prompt = require("prompt-sync")();

let lista = [];
let item = "";

console.log("Lista de compras - digite os itens!")

while (item !== "fim") {
  item = prompt("Digite um item (ou 'fim' para encerrar): ");

  if (item !== "fim") {
    lista.push(item);
  }
}

console.log("Lista de compras:", lista);
