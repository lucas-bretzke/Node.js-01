const express = require('express');
const { use } = require('./routes/carros');

const app = express();
//config


//IMPORT O ROTEAMENTO
const carros = require('./routes/carros');
const restrita = require('./routes/restrita');

//config
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.use('/carros', carros)

app.use('/restrita', restrita)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})