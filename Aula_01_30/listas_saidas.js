const frutas = ["maçã", "banana", "uva"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

for (const fruta of frutas) {
  console.log(fruta);
}


frutas.forEach((fruta) => {
  console.log(fruta);
});
