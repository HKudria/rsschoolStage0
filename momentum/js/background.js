const body = document.querySelector('body')
const slidePrev = document.querySelector('.slide-prev')
const slideNext = document.querySelector('.slide-next')
const apiKey = '62f2f7933d6ddd07985e3fc39c0b983c'
const galleries = {
    night: '185118123-72157720062587146',
    morning: '185118123-72157720069530982',
    afternoon: '185118123-72157720111881805',
    evening: '185118123-72157720111880160'
}
const setDefaultBg = () => {
    window.alert('Something wrong. Server isn\'t work!. Please try again later!')
    body.style.backgroundImage = 'url("./assets/img/bg.jpg")'
}

const parsePhoto = async (partOfDay) => {
    try {
        const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${apiKey}&gallery_id=${partOfDay}&format=json&nojsoncallback=1`)
        return await response.json()
    } catch (err) {
        setDefaultBg()
        return null
    }
}

const getBgCounter = () => {
    return parseInt(localStorage.getItem('bgCounter')) || 0
}

const setBG = () => {
    let bgData

    switch (Math.floor(getHours() / 6)) {
        case 0:
            bgData = parsePhoto(galleries.night)
            break
        case 1:
            bgData = parsePhoto(galleries.morning)
            break
        case 2:
            bgData = parsePhoto(galleries.afternoon)
            break
        case 3:
            bgData = parsePhoto(galleries.evening)
            break
    }

    if (bgData) {
        const img = new Image();
        bgData.then(data => {
            if(!data) {
                return null
            } else {
                let parameters = data.photos.photo[getBgCounter()]
                img.src = `https://live.staticflickr.com/${parameters.server}/${parameters.id}_${parameters.secret}_b.jpg`
            }
        })

        img.onload = () => {
            body.style.backgroundImage = `url(${img.src})`
        }

    }
}

slidePrev.addEventListener('click', () => {
    if (getBgCounter() === 0) {
        localStorage.setItem('bgCounter', '15')
    } else {
        localStorage.setItem('bgCounter', (parseInt(getBgCounter()) - 1).toString())
    }
    setBG()
})

slideNext.addEventListener('click', () => {
    if (getBgCounter() === 15) {
        localStorage.setItem('bgCounter', '0')
    } else {
        localStorage.setItem('bgCounter', (parseInt(getBgCounter()) + 1).toString())
    }
    setBG()
})

setBG();
