const express = require("express");

const app = express();
app.use(express.json());

const usuarios = [];

app.get('/usuarios',(request, response) => {
    response.json({ usuarios })
})

app.post('/usuarios',(request, response) => {
    //console.log(request.body);
 
        const usuario = {
        nome: request.body.nome,
        sobrenome: request.body.sobrenome,
    }    
    usuarios.push(usuario);

    response.json ({ usuario })
})

app.put('/usuarios/:id', (request, response) => {
    const { id } = request.params;

    const {nome, sobrenome} = request.body;

    const usuario = {
        nome,
        sobrenome
    }
    usuarios[id] = usuario;

    return response.json(usuario);
})

app.delete('/usuarios/:id', (request, response) => {
    const { id } = req.params;

    usuarios.splice(id, 1);

    return res.status(204).send();
})

app.get('/produtos',(request, response) => {
    response.json({produtos: [] })
})

app.listen(3000, () => {
    console.log("Servidor Iniciado!!!")
})