const express = require("express");
const mysql = require("mysql");
const axios = require('axios');
const cors = require("cors");
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_js"
})

app.post('/add_user', (req, res) => {
    let sql = "INSERT INTO `users` (`name`,`email`) VALUES (?, ?)";
    const values = [
        req.body.username,
        req.body.email
    ]
    db.query(sql, values, (err, result) => {
        if (err) { return res.json({ message: "Ocorreu um erro: " + err }) }
        return res.json({ success: "Usuário registrado com sucesso: " + result })
    })
})

app.get("/users", (req, res) => {
    let sql = "SELECT * FROM `users`";
    db.query(sql, (err, result) => {
        if (err) { return res.json({ "message": "Erro ao consultar banco de dados: " + err }) }
        return (res.json(result));
    }
    )
})

app.get("/get_user/:id", (req, res) => {
    const id = req.params.id;
    let sql = "SELECT * FROM `users` WHERE `id_user` = ?";
    db.query(sql, [id], (err, result) => {
        if (err) { return res.json({ message: "Erro ao consultar banco de dados: " + err }) }
        return (res.json(result));
    })
})

app.post("/edit_user/:id", (req, res) => {
    const id = req.params.id;
    let sql = "UPDATE `users` SET `name` = ?, `email`=? WHERE `id_user` = ?"
    const values = [
        req.body.name,
        req.body.email,
        id
    ];
    db.query(sql, values, (err, result) => {
        if (err) { return res.json({ message: "Algo de errado ocorreu: " + err }) }
        return res.json(result)
    })
})

app.delete("/del_user/:id", (req, res) => {
    const id = req.params.id;
    let sql = "DELETE FROM `users` WHERE `id_user` = ?"
    db.query(sql, [id], (err, result) => {
        if (err) { return res.json({ message: "Erro ao excluir Usuário: " + err }) }
        return res.json(result)
    })
})

app.listen(5000, () => {
    console.log("Running on port 5000");
})