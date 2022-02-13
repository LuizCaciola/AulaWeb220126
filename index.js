const express = require("express");

const app = express();

const usuarios = [];

const usuario = {
    nome: "Luiz",
    sobrenome: "Caciola",
}
usuarios.push(usuario);

app.get('/usuarios',(request, response) => {
    response.json({ usuarios })
})

app.get('/produtos',(request, response) => {
    response.json({produtos: [] })
})

app.listen(3000, () => {
    console.log("Servidor Iniciado!!!")
})