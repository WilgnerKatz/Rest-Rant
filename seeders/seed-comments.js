const db = require('../models')


async function seed() {
    
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })


    let comment = await db.Comment.create({
        author: 'Gandalf',
        rant: false,
        stars: 5.0,
        content: 'Amazing Food! The best restaurant in the city! '
    })


    place.comments.push(comment.id)
    
    
    process.exit()
}

seed()