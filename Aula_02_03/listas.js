//trabalhando com listas em Js

const lista = [1, 2, 3];

//adicionando itens 
lista.push(4);       // Adiciona no final [1,2,3,4]
console.log("após push ", lista);

lista.unshift(0);    // Adiciona no início [0,1,2,3,4]
console.log("após unshift", lista);

lista.splice(2, 0, 99); // Adiciona em posição específica (2) e não remove nenhum (0) [0,1,99,2,3,4]
console.log("após splice ", lista)

//Removendo itens:
lista.pop(); // remove último 
console.log("após pop ", lista);

lista.shift(); // remove primeiro
console.log("após shift ", lista);

lista.splice(1, 2); // remove 2 itens a partir do índice 1
console.log("após splice ", lista);
