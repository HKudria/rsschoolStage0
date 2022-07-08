const musicList = ['Aqua Caelestis.mp3', 'Ennio Morricone.mp3', 'River Flows In You.mp3', 'Summer Wind.mp3']
const playerList = document.querySelector('.play-list')

const renderPlayerList = () => {
    for (const [key, song] of musicList) {
        playerList.innerHTML += `<li id="song-${key}">${song}</li>`
    }
}

renderPlayerList()


console.log(musicList)

