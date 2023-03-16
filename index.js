require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).json("App Funcionando na sua Perfeição!")
})
app.get("/test", (req, res)=>{
    res.status(200).json("Acesse Agora o Nosso App!")
})
const port = Number(process.env.PORT)

app.listen(process.env.PORT ? Number(process.env.PORT) : 8000, console.log(`Server Work! at ${typeof(port)}`))