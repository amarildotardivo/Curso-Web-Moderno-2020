const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { response } = require('express')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    response.send('<h1>Parabéns</h1>')
})

app.listen(3003)