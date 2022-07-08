const musicList = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows In You', 'Summer Wind']
const playerList = document.querySelector('.play-list')
const playNext = document.querySelector('.play-next')
const playPrev = document.querySelector('.play-prev')
const play = document.querySelector('.play')

let timer
let actualSongId = 0
let activeSong

const playNextSong = () => {
    if(actualSongId===musicList.length-1) {
        createPlaySong(0)
    } else {
        createPlaySong(++actualSongId)
    }
}

const playPrevSong = () => {
    if(actualSongId===0) {
        createPlaySong(musicList.length-1)
    } else {
        createPlaySong(--actualSongId)
    }
}

const checkSongEnd = () => {
    if (activeSong.ended){
        playNextSong()
    } else {
        timer = setTimeout(checkSongEnd,1000)
    }
}

const paused = () => {
    if(activeSong){
        console.log()
        if(activeSong.paused) {
            activeSong.play()
            checkSongEnd()
        }  else {
            activeSong.pause()
            if(timer) clearTimeout(timer)
        }
    } else {
        createPlaySong(actualSongId)
    }
}

const createPlaySong = (id) => {
    if(activeSong && !activeSong.paused) {
        activeSong.pause()
    }
    activeSong = new Audio(`./assets/sounds/${musicList[id]}.mp3`)
    actualSongId = id
    paused()
}

const initialEventPlay = () => {
    const getSong = document.querySelectorAll('.songItem')
    for (let i = 0; i < getSong.length; i++) {
        getSong[i].addEventListener("click", function() {
            createPlaySong(getSong[i].id.replace('song-',''))
        });
    }
}

const renderPlayerList = () => {
    for (let i = 0; i < musicList.length; i++) {
        playerList.innerHTML += `<li><a href="#" class="songItem" id="song-${i}">${musicList[i]}</a></li>`
    }
   initialEventPlay()
}

playPrev.addEventListener('click',playPrevSong)
playNext.addEventListener('click',playNextSong)
play.addEventListener('click', paused)

renderPlayerList()

