const prompt = require("prompt-sync")();

let numero = 1;
let soma = 0;

while (numero !== 0) {
  numero = Number(prompt("Digite um número (0 para parar): "));
  soma += numero;
}

console.log("Soma total:", soma);
