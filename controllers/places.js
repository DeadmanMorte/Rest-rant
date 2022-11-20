const router = require('express').Router()
const places = require('../models/places.js')

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    //Default image if one is not provided
    req.body.pic = '/images/nonsense.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'Somewhere in our big beautiful World'
  }
  if (!req.body.state) {
    req.body.state = 'Somewhere else in our big beautiful World'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', function(req,res) {
    res.render('places/index', { places })
})


module.exports = router
