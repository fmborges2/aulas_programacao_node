const prompt = require("prompt-sync")();

function situacao(n1, n2){
    media = (n1+n2)/2;
    if(media >= 7){
        console.log("Aprovado, nota: " + media);
    } else if (media >= 4){
        console.log("Recuperação, nota: " + media);
    } else {
        console.log("Reprovado, nota: " + media);
    }
}


let nota_1 = Number(prompt('nota 1: '));
let nota_2 = Number(prompt('nota_2: '));

situacao(nota_1, nota_2);


