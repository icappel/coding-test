import express from 'express'
import { sharksList, catsList } from '../data/images.js'

const apiRouter = express.Router()

/**
 * Return a random integer in the range [min, max) 
 */
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

/**
 * Randomly shuffle an array in-place using the Fisher-Yares algorithm.
 */
const shuffle = (array) => {
    for (let i = 0; i < array.length - 1; i++){
        const swapIndex = randomInt(i, array.length - 1)

        // swap i and swapIndex
        const temp = array[swapIndex]
        array[swapIndex] = array[i]
        array[i] = temp
    }
    return array
}

apiRouter.get('/images', (req, res, next) => {
    const content = req.query.content

    let images = []

    // Imitate filtering images by content property
    if (content) {
        switch (content) {
            case "sharks":
                images = sharksList
                break
            case "cats":
                images = catsList
                break
            // If content param unrecognized, return empty list
        }
    } else {
        // If requesting all images, return in a random order
        images = shuffle(sharksList.concat(catsList))
    }
    res.json({images})
})

export default apiRouter