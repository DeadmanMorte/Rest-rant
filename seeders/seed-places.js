const db = require('../models')

db.Place.create([{
    name: 'Supreme Grand Master Food',
    city: 'Huntington Beach',
    state: 'CA',
    cuisines: 'Vegan, Pan-Asian',
    pic: '/images/vegan-nirvana.jpg',
    founded: 2016
   }, {
    name: 'Bad BBQ',
    city: 'Artesia',
    state: 'CA',
    cuisines: 'Korean Barbeque, All You Can Eat (AYCE)',
    pic: '/images/BAD-BBQ.jpg',
    founded: 2012
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})