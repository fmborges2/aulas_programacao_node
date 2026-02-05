// Aqui serão apresentadas formas de se realizar requisições web via protocolo HTTP:
// Nota-se, como as requisições HTTP dependem da conexão com a rede e o servidor web, 
// usa-se métodos assíncronos.
// Por isso, as funções devem ser async function e as chamadas ao método HTTP 
// devem ser await fetch() e await response...

//Exemplos:

//Criação do link raiz para a API:
const API = "https://dummyjson.com/users";

// Requisição GET:
const resposta_get = await fetch(API);
const dados_get = await resposta_get.json();

//captura os 10 primeiros registros
const primeirosCinco = dados_get.users.slice(0, 10)
.map(u => `${u.id} - ${u.firstName} ${u.lastName}`);

console.log("Resposta - GET:")
console.log(primeirosCinco);


//Requisição POST:
const usuario = {
    firstName: "Fernando",
    lastName: "Borges",
    age: 29,
    email: "fernando@mail.com"
};

const resposta_post = await fetch(`${API}/add`, 
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)
    }
);

const dados_post = await resposta_post.json();

console.log("\nResposta - POST: \n" +
"ID: " + dados_post.id + "\n" +
"Primeiro nome: " + dados_post.firstName + "\n" +
"Sobrenome: " + dados_post.lastName + "\n" +
"Idade: " + dados_post.age + "\n" +
"E-mail: " + dados_post.email);

// Requisição de um nome específico e atualização de dados:
// 1o: Localização (GET) de um usuário específico:
const id_buscado = 26;

const resposta_get_id = await fetch(`${API}/${id_buscado}`, 
    {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }
);
const dados_get_id = await resposta_get_id.json();

console.log("\nUsuário localizado:\n" +
"ID: " + dados_get_id.id + "\n" +
"Primeiro nome: " + dados_get_id.firstName + "\n" +
"Sobrenome: " + dados_get_id.lastName + "\n" +
"Idade: " + dados_get_id.age + "\n" +
"E-mail: " + dados_get_id.email);


// Atualização de dados do usuário do id 26:
const usuario_atualizar = {
firstName: "Ana",
lastName: "Souza",
age: 30,
email: "analuiza@mail.com"
};

const resposta_put = await fetch(`${API}/${id_buscado}`, 
    {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario_atualizar)
    }
);
const dados_put = await resposta_put.json();

console.log("\nUsuário atualizado:\n" +
"ID: " + dados_put.id + "\n" +
"Primeiro nome: " + dados_put.firstName + "\n" +
"Sobrenome: " + dados_put.lastName + "\n" +
"Idade: " + dados_put.age + "\n" +
"E-mail: " + dados_put.email);

// Usando método DELETE:
const id_excluir = 29;

const resposta_delete = await fetch(`${API}/${id_excluir}`, 
    {
        method: "DELETE"
    }
);

const dados_delete = await resposta_delete.json();

console.log("\nUsuário removido:\n" +
"ID: " + dados_delete.id + "\n" +
"Primeiro nome: " + dados_delete.firstName + "\n" +
"Sobrenome: " + dados_delete.lastName + "\n" +
"Idade: " + dados_delete.age + "\n" +
"E-mail: " + dados_delete.email);

