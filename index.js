const express = require('express');
const app = express();

// Lista de usuários autorizados
const listaSeguranca = ['usuario1', 'usuario2', 'usuario3'];

// Middleware para verificar autenticação
const verificaAutenticacao = (req, res, next) => {
    const usuario = req.query.usuario; // Você pode mudar para req.body.usuario se preferir
    if (listaSeguranca.includes(usuario)) {
        next(); // Se o usuário estiver na lista de segurança, continua para a próxima rota
    } else {
        res.status(403).send('Acesso negado!'); // Se o usuário não estiver na lista, retorna um erro de acesso negado
    }
};

// Rota para enviar o primeiro script
app.get('/script1', verificaAutenticacao, (req, res) => {
    res.send('Script 1 executado!');
});

// Rota para enviar o segundo script
app.get('/script2', verificaAutenticacao, (req, res) => {
    res.send('Script 2 executado!');
});

// Rota para enviar o terceiro script
app.get('/script3', verificaAutenticacao, (req, res) => {
    res.send('Script 3 executado!');
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
