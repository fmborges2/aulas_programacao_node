const mysql = require("mysql2/promise");

const nomeBanco = "crud_usuarios";

async function inicializarBanco() {
    try {
        // Conexão inicial (sem banco)
        const conexaoInicial = await mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "2609"
        });

        // Criar banco se não existir
        await conexaoInicial.query(`CREATE DATABASE IF NOT EXISTS ${nomeBanco}`);
        console.log(`Banco '${nomeBanco}' verificado/criado.`);

        // Conectar ao banco criado
        const conexao = await mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "2609",
            database: nomeBanco
        });

        console.log("Conectado ao MySQL dentro do banco:", nomeBanco);

        // Criar tabela se não existir
        const sqlTabela = `
            CREATE TABLE IF NOT EXISTS usuarios (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100),
                telefone VARCHAR(20),
                idade INT,
                email VARCHAR(100)
            )
        `;

        await conexao.query(sqlTabela);
        console.log("Tabela 'usuarios' verificada/criada.");

        return conexao;

    } catch (erro) {
        console.error("Erro ao inicializar banco:", erro);
    }
}

module.exports = inicializarBanco;
