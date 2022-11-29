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
            <div className = "col-sm-6">       
                <h2>
                  <a href={`/places/${place.id}`}>    
                    {place.name}
                  </a>  
                </h2>
                <p className='text-center'>
                  {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}/>
                <p className='text center'>
                  Located in {place.city}, {place.state}
                </p>
            </div>
        </main>
      )
    })
    return (
      <Def>
          <main>
              <div className='row'>
                <h1>THEES EES PUHLUHAESEEz</h1>
                {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  
// module.exports = places
module.exports = index