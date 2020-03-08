const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000   
const bodyParser = require('body-parser')

const router = require('./routes/routes')
const sequelize = require('./models/index')


app.use('/pessoas', router)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.set('view', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(port,() => console.log('Start'))