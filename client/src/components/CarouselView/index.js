import './styles.css'
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
        setImageIndex(0)
    }, [images])

    useEffect(() => {
        document.addEventListener('keyup', handleKeyPress)

        return () => {
            document.removeEventListener('keyup', handleKeyPress)
        }
    })

    return (
        <div className="CarouselView">
            <button 
                className={"arrow-button" + (imageIndex <= 0 ? " hidden" : "")} 
                onClick={decrementIndex}
            >
                    &lt;
            </button>
            {images.length > 0 ?
                <div className="image">
                    <img src={images[imageIndex]} alt="A cat or shark" />
                </div>
                :
                <div className="image">No images found.</div>
            }
            <button 
                className={"arrow-button" + (imageIndex >= images.length - 1 ? " hidden" : "")}  
                onClick={incrementIndex}
            >
                &gt;
            </button>
        </div>
    )
}

export default CarouselView