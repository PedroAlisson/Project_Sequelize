const express = require('express')
const app = express()
const port = process.env.PORT || 3000 
const bodyParser = require('body-parser')


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))



app.listen(port,() => console.log('Start'))