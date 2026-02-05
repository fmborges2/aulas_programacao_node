const prompt = require("prompt-sync")();

let nota_1 = Number(prompt('nota 1: '));
let nota_2 = Number(prompt('nota_2: '));

let media = (nota_1+nota_2)/2;

if(media >= 7){
    console.log("Aprovado, nota: " + media);
} else if (media >= 4){
    console.log("Recuperação, nota: " + media);
} else {
    console.log("Reprovado, nota: " + media);
}