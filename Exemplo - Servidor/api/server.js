const express = require("express");
const cors = require("cors");
const conexao = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// CREATE
app.post("/usuarios", (req, res) => {
    const { nome, telefone, idade, email } = req.body;
    const sql = "INSERT INTO usuarios (nome, telefone, idade, email) VALUES (?, ?, ?, ?)";
    conexao.query(sql, [nome, telefone, idade, email], (erro, resultado) => {
        res.send({ id: resultado.insertId, nome, telefone, idade, email });
    });
});

// READ
app.get("/usuarios", (req, res) => {
    conexao.query("SELECT * FROM usuarios", (erro, resultados) => {
        res.send(resultados);
    });
});

// UPDATE
app.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { nome, telefone, idade, email } = req.body;
    const sql = "UPDATE usuarios SET nome=?, telefone=?, idade=?, email=? WHERE id=?";
    conexao.query(sql, [nome, telefone, idade, email, id], () => {
        res.send({ mensagem: "Atualizado!" });
    });
});

// DELETE
app.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    conexao.query("DELETE FROM usuarios WHERE id=?", [id], () => {
        res.send({ mensagem: "Removido!" });
    });
});

app.listen(3000, () => console.log("API rodando em http://localhost:3000"));
