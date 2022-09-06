const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('rota Carros');
})

router.get('/:marca', (req, res) => {
    const marcas = ['volks', 'mercedes', 'bmw']

    if (marcas.includes(req.params.marca)) {
        res.send('A marca é' + req.params.marca);
    } else {
        res.status(404).send('<h1>Marca não encontrada</h1>')
    }
})

router.get('/:marca/:modelo', (req, res) => {
    res.send('A rota é' + req.params.marca);
    res.send(req.params);
})


module.exports = router;