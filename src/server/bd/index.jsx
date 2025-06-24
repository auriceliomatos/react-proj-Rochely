const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'corpobombeiros'
});

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // URL do seu frontend Vite
    methods: ['GET', 'POST'],
    credentials: true
}));

app.post('/login', (req, res) => {
    const { nome, senha } = req.body;
    db.query("SELECT * FROM login WHERE nome = ? AND senha = ?", [nome, senha], (err, result) => {
        if (err) {
            console.error('Erro ao consultar dados: ' + err.message);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        if (result.length > 0) {
            return res.json({ message: 'Login realizado com sucesso', user: result[0] });
        } else {
            return res.status(401).json({ message: 'Usuário ou senha inválidos' });
        }
    });
});

//-------------------------------------------//
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.message);
        return;
    }
    console.log('Conexão ao banco de dados estabelecida');
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});





