// trabalhando com objetos em Js

const usuario = {
    nome: "Ana",
    idade: 25
};

console.log("objeto inicial:", usuario);

// adicionando itens (propriedades)
usuario.email = "ana@email.com"; 
console.log("após adicionar email:", usuario);

usuario["ativo"] = true; 
console.log("após adicionar ativo:", usuario);

// atualizando valores
usuario.idade = 26;
console.log("após atualizar idade:", usuario);

// removendo itens (propriedades)
delete usuario.ativo;
console.log("após remover ativo:", usuario);

delete usuario["email"];
console.log("após remover email:", usuario);
