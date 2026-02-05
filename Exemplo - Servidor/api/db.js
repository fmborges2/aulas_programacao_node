const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "2609",
    database: "crud_usuarios"
});

conexao.connect();
module.exports = conexao;
