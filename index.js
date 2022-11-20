// MODULES AND GLOBALS
require('dotenv').config()
const express = require('express')
const app = express()

// EXPRESS SETTINGS
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended:true }))

// CONTROLLER AND ROUTES
app.use('/places', require('./controllers/places'))

app.get('/', function (req,res){
    res.render('home')
})

app.get('*', function (req,res) {
    res.status(404).render('error404') 
})


// LISTEN FOR CONNECTIONSHHHHH
app.listen(process.env.PORT)