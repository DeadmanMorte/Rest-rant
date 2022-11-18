const router = require('express').Router()

router.post('/', (req, res) => {
  res.send('bing chilling')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

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
