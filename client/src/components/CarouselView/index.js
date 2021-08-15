import { useState, useEffect } from "react"

function CarouselView(props) {
    const images = props.images
    const [imageIndex, setImageIndex] = useState(0);

    const handleKeyPress = (event) => {
        if (event.key === 'ArrowLeft') {
            decrementIndex()
        } else if (event.key === 'ArrowRight') {
            incrementIndex()
        }
    }

    const decrementIndex = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1)
        }
    }

    const incrementIndex = () => {
        if (imageIndex < images.length - 1) {
            setImageIndex(imageIndex + 1)
        }
    }

    useEffect(() => {
        document.addEventListener('keyup', handleKeyPress)

        return () => {
            document.removeEventListener('keyup', handleKeyPress)
        }
    }, [handleKeyPress])

    // TODO: Make sure arrow presses change the image
    return (
        <div onKeyPress={handleKeyPress}>
            <button onClick={decrementIndex}>&lt;</button>
            {images.length > 0 ?
                <img src={images[imageIndex]} alt="A cat or shark" />
                :
                <div>No images found.</div>
            }
            <button onClick={incrementIndex}>&gt;</button>
        </div>
    )
}

export default CarouselView