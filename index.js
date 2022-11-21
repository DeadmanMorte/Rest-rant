// MODULES AND GLOBALS
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// EXPRESS SETTINGS
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended:true }))
app.use(methodOverride('_method'))

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