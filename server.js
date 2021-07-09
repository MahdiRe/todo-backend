if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
const methodOverride = require('method-override')

const indexRouter = require('./routers/index')
const todosRouter = require('./routers/todos')

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)
app.use('/todo', todosRouter)
app.use(methodOverride('_method'))

app.listen(process.env.PORT || 5000)