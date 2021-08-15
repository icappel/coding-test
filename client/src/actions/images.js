const ENDPOINT = '/api'

const IMAGE_ENDPOINT = ENDPOINT + '/images'

export const getImages = async (selected) => {
    const {sharks, cats} = selected

    let url = IMAGE_ENDPOINT

    if (sharks && !cats) {
        url += '?content=sharks'
    } else if (!sharks && cats) {
        url += '?content=cats'
    }
    
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => {
                resolve(res.json().then(json => json.images))
            })
            .catch(error => {
                alert(error)
            })
    })

}