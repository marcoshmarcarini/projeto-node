//primeiro declara uma porta. Ela é única por processo.
const porta = 3004
// chama o express
const express = require('express')

const app = express()

app.get('/produtos', (req, res, next) =>{
    res.send({nome: 'Notebook', preco: 1123.45}) //Converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})
