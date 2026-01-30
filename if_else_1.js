const prompt = require("prompt-sync")();

let nota_1 = Number(prompt('nota 1: '));
let nota_2 = Number(prompt('nota_2: '));

let media = (nota_1+nota_2)/2;

if(media < 6){
    console.log("Reprovado, nota: " + media);
} else{
    console.log("Aprovado, nota: " + media);
}