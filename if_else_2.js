const prompt = require("prompt-sync")();

let numero = Number(prompt('digite um número: '));
resto = numero%2;

if(resto == 0){
    console.log("Número Par");
} else{
    console.log("Número Ímpar");
}