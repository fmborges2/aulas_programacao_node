const prompt = require("prompt-sync")();
const inicializarBanco = require("./db");

async function main() {
    const db = await inicializarBanco();

    async function criarUsuario() {
        const nome = prompt("Nome: ");
        const telefone = prompt("Telefone: ");
        const idade = prompt("Idade: ");
        const email = prompt("E-mail: ");

        const sql = "INSERT INTO usuarios (nome, telefone, idade, email) VALUES (?, ?, ?, ?)";
        await db.query(sql, [nome, telefone, idade, email]);

        console.log("\nUsuário criado com sucesso!\n");
    }

    async function listarUsuarios() {
        const [linhas] = await db.query("SELECT * FROM usuarios");
        console.table(linhas); //log em formato de tabela.
    }

    async function atualizarUsuario() {
        const id = prompt("ID do usuário a atualizar: ");

        const nome = prompt("Novo nome: ");
        const telefone = prompt("Novo telefone: ");
        const idade = prompt("Nova idade: ");
        const email = prompt("Novo e-mail: ");

        const sql = "UPDATE usuarios SET nome=?, telefone=?, idade=?, email=? WHERE id=?";
        await db.query(sql, [nome, telefone, idade, email, id]);

        console.log("\nUsuário atualizado!\n");
    }

    async function removerUsuario() {
        const id = prompt("ID do usuário a remover: ");

        await db.query("DELETE FROM usuarios WHERE id=?", [id]);

        console.log("\nUsuário removido!\n");
    }

    // MENU CLI
    while (true) {
        console.log("\n===== MENU CRUD =====");
        console.log("1 - Criar usuário");
        console.log("2 - Listar usuários");
        console.log("3 - Atualizar usuário");
        console.log("4 - Remover usuário");
        console.log("0 - Sair");

        const opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                await criarUsuario();
                break;
            case "2":
                await listarUsuarios();
                break;
            case "3":
                await atualizarUsuario();
                break;
            case "4":
                await removerUsuario();
                break;
            case "0":
                console.log("Saindo...");
                process.exit();
            default:
                console.log("Opção inválida.");
        }
    }
}

main();
