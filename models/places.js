const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

// [{
//     name: 'Supreme Grand Master Food',
//     city: 'Huntington Beach',
//     state: 'CA',
//     cuisines: 'Vegan, Pan-Asian',
//     pic: '/images/vegan-nirvana.jpg'
//   }, {
//     name: 'Bad BBQ',
//     city: 'Artesia',
//     state: 'CA',
//     cuisines: 'Korean Barbeque, All You Can Eat (AYCE)',
//     pic: '/images/BAD-BBQ.jpg'
//   }]
  