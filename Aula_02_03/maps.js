// trabalhando com Maps em Js

const mapa = new Map(); // Criar um mapa vazio 

// adicionando itens (chave → valor)
mapa.set("nome", "Carlos"); 
console.log("após set nome:", mapa);

//em objeto: mapa.nome = "Carlos"


mapa.set("idade", 30);
console.log("após set idade:", mapa);

// adicionando chave não-string
mapa.set(123, "ID numérico");
console.log("após set chave numérica:", mapa);

// atualizando valores
mapa.set("idade", 31); 
console.log("após atualizar idade:", mapa);

// removendo itens
mapa.delete("nome");
console.log("após delete nome:", mapa);

mapa.delete(123);
console.log("após delete chave numérica:", mapa);

// removendo tudo
mapa.clear();
console.log("após clear (mapa vazio):", mapa);
