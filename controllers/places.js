const router = require('express').Router()

router.get('/', function(req,res) {
    let places = [{
        name: 'Supreme Grand Master Food',
        city: 'Huntington Beach',
        state: 'CA',
        cuisines: 'Vegan, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Bad BBQ',
        city: 'Artesia',
        state: 'CA',
        cuisines: 'Korean Barbeque, All You Can Eat (AYCE)',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index', { places })
})

module.exports = router
