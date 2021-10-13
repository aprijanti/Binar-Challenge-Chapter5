const express = require('express')
const fs = require('fs')
const app = express()
const database = require('/public/index.json')

// CHALLENGE NO.1
app.use('/dashboard', express.static('./public/binar-challenge-1/challenge.html')) 

app.use('/batuguntingkertas', express.static('./public/binar-challenge-1/hand-game.html'))

app.use(express.json)

// CHALLENGE NO.2 PADA FILE index.json

// CHALLENGE NO.3 pada aplikasi Postman

// CHALLENGE NO.4
app.get('/json', (req, res, next) => {
    const jsonData = fs.readFileSync('./public/index.json')
    const data = JSON.parse(jsonData.toString())

    return res.status(200).json(data)
})

// Server Status Login
app.post('status', (re, res, next) => {
    const username = req.body.username
    const password = req.body.password

    const isExist = database.find(data => {
        return data.username === username
    })

    if (!isExist) {
        return res.status(404).json({
            message: "wrong user"
        })
    }

    if (isExist.password !== password) {
        return res.status(401).json({
            message: "wronf username"
        })
    }

    return res.status(200).json({
        message: "success"
    })
})

app.listen(9000)