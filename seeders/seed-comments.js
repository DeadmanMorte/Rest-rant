const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, Supreme Grand Master Food
    let place = await db.Place.findOne({ name: 'Supreme Grand Master Food' })

    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    let comment2 = await db.Comment.create({
        author: 'Starving Steven',
        rant: false,
        stars: 5.0,
        content: 'Argh, plainly sublime! Greatly promoted!'
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment.id)
    place.comments.push(comment2.id)

    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

seed()
