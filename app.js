import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { validaDadosUsuario } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/public"));

app.post('/submit', (req, res) => {

    const usuario = req.body;
    console.log(usuario);

    if(usuario){
        const erros = validaDadosUsuario(usuario) 
        if(erros.length === 0){
            res.status(201).send({status:"sucesso", mensagem:"Cadastro realizado com sucesso!"})
        } else {
            res.status(401).send({status:"falha", erros: erros})
        }
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});