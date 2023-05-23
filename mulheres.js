const express = require("express")
const router= express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Dayane Michele',
        minibio:'Desenvolvedora em aprendizado',
    },
    {
        nome:'Iana Chan',
        minibio:'Fundadora da programaria',
    },
    {
        nome:'Nina Da Hora',
        minibio :'hacker antirracista',
    }
]


function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta, mostraPorta)