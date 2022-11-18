const router = require('express').Router()

router.get('/', function(req,res) {
    let places = [{
        name: 'Supreme Grand Master Food',
        city: 'Huntington Beach',
        state: 'CA',
        cuisines: 'Vegan, Pan-Asian',
        pic: '/images/vegan-nirvana.jpg'
      }, {
        name: 'Bad BBQ',
        city: 'Artesia',
        state: 'CA',
        cuisines: 'Korean Barbeque, All You Can Eat (AYCE)',
        pic: '/images/BAD-BBQ.jpg'
      }]
      
    res.render('places/index', { places })
})

module.exports = router
