const body = document.querySelector('body')
const slidePrev = document.querySelector('.slide-prev')
const slideNext = document.querySelector('.slide-next')
const apiKey = '62f2f7933d6ddd07985e3fc39c0b983c'
let bgCounter = getLocalStorage('bgCounter')||0
const galleries = {
    night: '185118123-72157720062587146',
    morning: '185118123-72157720069530982',
    afternoon: '185118123-72157720111881805',
    evening: '185118123-72157720111880160'
}

const parsePhoto = async (partOfDay) => {
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${apiKey}&gallery_id=${partOfDay}&format=json&nojsoncallback=1`)
    return await response.json()
}

const setBG = () =>  {
    let bgData
    const img = new Image();
    switch (Math.floor(getHours()/6)) {
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

    bgData.then(data=>{
        let parameters = data.photos.photo[bgCounter]
        img.src = `https://live.staticflickr.com/${parameters.server}/${parameters.id}_${parameters.secret}_b.jpg`
    })

    img.onload = () => {
        console.log(img.src)
        body.style.background = `#f3f3f3 url('${img.src}') no-repeat `;
        body.style.backgroundSize = "cover";
    }
}

slidePrev.addEventListener('click',()=>{
   if(bgCounter<20){
       bgCounter++
      setLocalStorage('bgCounter',bgCounter)
   }
})

setBG()
