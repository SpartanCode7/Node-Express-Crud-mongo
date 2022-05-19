if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express() 
const bodyParser = require('body-parser')
const api = require('./models/database_connected')
const mongoose = require("mongoose");
const path = require("path");
const categories = require("./routes/categories")
var cors = require('cors')


app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept") 
    next()
})

const jwt = require('jsonwebtoken')

app.use(express.json())


app.use('/api', api)
app.use('/categories', api)
app.use('/categories', categories)


const posts = [
    {
        username: 'kyle',
        title: 'Post 1'
    },
    {
        username: 'Jim',
        title: 'Post 2'
    },
    {
        username: 'Ali',
        title: 'Post 3'
    }
]

//Adding Mongoose


app.get('/posts', authenticateToken,  (req, res) => {
    console.log(req.body)
    res.json(posts.filter(post => post.username === req.user.name))
})

app.post('/login', (req, res) => {
    //Auth User
    const username = req.body.username
    const user = { name:username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})

function authenticateToken(req, res, next) { 
    console.log(req.headers)
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(5000)