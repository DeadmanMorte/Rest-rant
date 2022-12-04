const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className='border'>
          <h2 className='rant'>{c.rant ? 'RANT! >:(' : 'RAVE! <3' }</h2>
          <h4>{c.content}</h4>
          <h3> <strong>- {c.author}</strong></h3>
          <h4> Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
      <Def>
        <main>
            <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
          <h3> Located in {data.place.city}, {data.place.state} </h3>
            </div>
      <div className="col-sm-6">
        <h3> {data.place.showEstablished()} </h3>
        <h4> Serving {data.place.cuisines} </h4>
        <h2> Rating </h2>
        <h2> Description </h2>
        <h2> Comments </h2>
        {comments}
        <hr />
        <h2> Wanna leave a rant or rave?</h2>
        <form method='POST' action={`/places/${data.place.id}/comment`} >
          <div className='form-group'>
            <label htmlFor='author'>Author</label>
            <input type = 'text' className='form-control' id='author' name='author' required />
          </div>
          <div className='form-group'>
              <label htmlFor='star-rating'>Star Rating</label>
              <input className='form-control' type = 'number' id='star-rating' step={0.5} name='star-rating'  required />
          </div>
          <div className='form-group'>
              <label htmlFor='content'>Content</label>
              <textarea className='form-control' type = 'text' id='content' name='content'  required></textarea> 
          </div>
          <div className='form-group'>
              <label htmlFor=''>Rant</label>
              <input className='form-control' type = 'checkbox' id='rant' name='rant'/>
          </div>
          <input className='btn btn-primary' type='submit' value='Add Comment' />
        </form>
    <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className='btn btn-danger'>
                    Delete
                </button>
            </form>
    </div>
  </main>
</Def>
    )
}

module.exports = show
