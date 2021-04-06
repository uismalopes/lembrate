const { Router } = require('express')
const data = require('../data')
let counter = 0

const router = Router()

router.get('/lembretes', (req, res)=> {
    res.status(200).send(data)
})

router.post('/lembretes', (req, res)=> {
    counter++;
    const { texto } = req.body;
    data[counter] = {
        counter, texto
    }
    res.status(201).send(data[counter]);
})

module.exports = router