import React, { useState, useEffect } from 'react'
import { getImages } from '../../actions/images.js'
import ContentSelector from '../ContentSelector'
import CarouselView from '../CarouselView'

function Carousel() {
    const [selected, setSelected] = useState({sharks: true, cats: true})
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        getImages(selected)
            .then(results => {
                setImages(results)
                setLoading(false)
            })
    }, [selected])

    return (
        <>
            <ContentSelector selected={selected} setSelected={setSelected} />
            <CarouselView images={images} />
        </>
    )
}

export default Carousel