const musicList = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows In You', 'Summer Wind']
const playerList = document.querySelector('.play-list')
const playNext = document.querySelector('.play-next')
const playPrev = document.querySelector('.play-prev')
const play = document.querySelector('.play')
const progressBarStatus = document.querySelector('.progress-bar-status')
const progressBar = document.querySelector('.progress-bar')
const volumeBarStatus = document.querySelector('.volume-bar-status')
const volumeBar = document.querySelector('.volume-bar')
const currentSongTime = document.querySelector('#current-song-time')
const fullSongTime = document.querySelector('#full-song-time')
const actualSongTitle = document.querySelector('#actualSong')
const muteButton = document.querySelector('.mute')

let timer
let actualSongId = 0
let activeSong = new Audio(`./assets/sounds/${musicList[0]}.mp3`)
let globalVolume = 0.5
let isMute = false
let volumeBeforeMute = globalVolume


const playNextSong = () => {
    if (actualSongId === musicList.length - 1) {
        createPlaySong(0)
    } else {
        createPlaySong(++actualSongId)
    }
}

const playPrevSong = () => {
    if (actualSongId === 0) {
        createPlaySong(musicList.length - 1)
    } else {
        createPlaySong(--actualSongId)
    }
}

const checkSongEnd = () => {
    if (activeSong.ended) {
        playNextSong()
    } else {
        progressBarStatus.style.cssText += 'width:' + (activeSong.currentTime / activeSong.duration) * 100 + '%'
        currentSongTime.textContent = convertSecondToTime(activeSong.currentTime)
        timer = setTimeout(checkSongEnd, 1000)
    }
}

const paused = () => {

    if (activeSong.paused) {
        activeSong.play()
        play.classList.add('pause')
        checkSongEnd()
    } else {
        play.classList.remove('pause')
        activeSong.pause()
        if (timer) clearTimeout(timer)
    }
}

const setFullSongTime = () => {
    activeSong.addEventListener('loadedmetadata', () => {
        fullSongTime.textContent = convertSecondToTime(activeSong.duration)
    })
}

const createPlaySong = (id) => {
    if (activeSong && !activeSong.paused) {
        activeSong.pause()
    }
    activeSong = new Audio(`./assets/sounds/${musicList[id]}.mp3`)
    setFullSongTime()
    activeSong.volume = globalVolume
    actualSongId = id
    actualSongTitle.textContent = musicList[actualSongId]
    paused()
}

const initialEventPlay = () => {
    const getSong = document.querySelectorAll('.songItem')
    for (let i = 0; i < getSong.length; i++) {
        getSong[i].addEventListener("click", function () {
            createPlaySong(getSong[i].id.replace('song-', ''))
        });
    }
}

const renderVolumeBar = () =>{
    volumeBarStatus.style.cssText += `width:${globalVolume*100}%`
}

const renderPlayerList = () => {
    currentSongTime.textContent = convertSecondToTime(0)
    setFullSongTime()
    activeSong.volume = globalVolume
    actualSongTitle.textContent = musicList[actualSongId]
    progressBarStatus.style.cssText += 'width:0%'
    renderVolumeBar()
    for (let i = 0; i < musicList.length; i++) {
        playerList.innerHTML += `<li><a href="#" class="songItem" id="song-${i}">${musicList[i]}</a></li>`
    }
    initialEventPlay()
}

playPrev.addEventListener('click', playPrevSong)
playNext.addEventListener('click', playNextSong)
play.addEventListener('click', paused)

volumeBar.addEventListener('click', (event) => {
    isMute = false
    globalVolume = ((event.offsetX / volumeBar.offsetWidth))
    activeSong.volume = globalVolume
    renderVolumeBar()
})

muteButton.addEventListener('click',()=>{
    if (!isMute) {
        volumeBeforeMute = globalVolume
        globalVolume = 0
        activeSong.volume = 0
        isMute = true
    } else {
        globalVolume = volumeBeforeMute
        activeSong.volume = volumeBeforeMute
        isMute = false
    }
    renderVolumeBar()
})

progressBar.addEventListener('click', (event) => {
    let progresBarPositionInPercent = parseInt(((event.offsetX / progressBar.offsetWidth) * 100))
    activeSong.currentTime = parseInt((progresBarPositionInPercent * activeSong.duration) / 100);
})

renderPlayerList();
