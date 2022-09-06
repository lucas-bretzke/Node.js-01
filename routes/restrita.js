const express = require('express');
const router = express.Router();


//MIDDLEWARES - INTERMEDIARIO - INTERCEPTADOR -MEIO 
//telefone sem fio
//Com o middleware posso fazer o codigó que quiser antes de passar para a proxima rota


const usuarioLogado = true

router.get('/restrita', (req, res, next) => {
    if (!usuarioLogado) {
        res.redirect('/')
    }
    next();
})
router.get('/', (req, res,) => {
    res.send('<h1>Página inicial</h1>')
})

router.get('/restrita', (req, res) => {
    res.send('<h1>Rota restrita</h1>')
})

router.get('/restrita/usuarios', (req, res) => {
    res.send('<h1>Listar usuários</h1>')
})

module.exports = router