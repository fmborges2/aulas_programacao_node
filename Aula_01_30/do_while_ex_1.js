const prompt = require("prompt-sync")();

let texto;

do {
  texto = prompt("Digite algo (ou 'sair' para encerrar): ");
  console.log("Você digitou:", texto);
} while (texto !== "sair");

console.log("Programa encerrado.");
