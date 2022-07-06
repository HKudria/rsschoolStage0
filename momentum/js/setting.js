const activateSetting = () =>{
    const settingWeather = document.querySelector('#weather')
    const settingTime = document.querySelector('#time')
    const settingDate = document.querySelector('#date')
    const settingGreeting = document.querySelector('#greeting')
    const settingQuote = document.querySelector('#quote')
    const settingAudio = document.querySelector('#audio')
    const settingToDo = document.querySelector('#todolist')
    const settingLanEn = document.querySelector('#en')
    const settingLanRu = document.querySelector('#ru')

    const blockWeather = document.querySelector('.weather')
    const blockGreeting = document.querySelector('.greeting-container')
    const blockFooter = document.querySelector('.footer')
    const blockPlayer = document.querySelector('.player')
    const imageSetting = document.querySelector('#showSetting')
    const blockSetting = document.querySelector('.setting')


    settingWeather.addEventListener('change',(e)=>{
     blockWeather.classList.toggle('weather-hide')
    })

    settingTime.addEventListener('change',(e)=>{
        timeRender.classList.toggle('time-hide')
    })

    settingDate.addEventListener('change',(e)=>{
        dateRender.classList.toggle('date-hide')
    })

    settingGreeting.addEventListener('change',(e)=>{
        blockGreeting.classList.toggle('greeting-container-hide')
    })

    settingQuote.addEventListener('change',(e)=>{
        blockFooter.classList.toggle('greeting-container-hide')
    })

    settingAudio.addEventListener('change',(e)=>{
        blockPlayer.classList.toggle('player-hide')
    })

    settingLanRu.addEventListener('click',()=>{
        userConfig.lang = 'ru'
        setLocale()
        document.location.reload();
    })

    settingLanEn.addEventListener('click',()=>{
        userConfig.lang = 'en'
        setLocale()
        document.location.reload();
    })

    imageSetting.addEventListener('click', () =>{
        blockSetting.classList.toggle('setting-show')
    })
}



const renderCheckBox = () => {
    checkBoxEl.innerHTML += `<p>${local.choseLocal} <span id="en">${local.en}</span> || <span id="ru">${local.ru}</span></p>`
    for (const argument of userConfig.blocks) {
        checkBoxEl.innerHTML += `<label for="${argument}">${local[argument]}</label>
        <input type="checkbox" name="" id="${argument}" checked>`
    }
    activateSetting()
}




