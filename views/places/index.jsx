const React = require('react')
const Def = require('../default')

// function places () {
//     return (
//         <Def>
//             <main>
//                 <h1></h1>
//             </main>
//         </Def>
//     )
// }
function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <main>
            <div>       
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
            </div>
        </main>
      )
    })
    return (
      <Def>
          <main>
              <h1>THEES EES PUHLUHAESEEz</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }
  
// module.exports = places
module.exports = index