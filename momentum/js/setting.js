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

    if (!localStorage.getItem('weather')){
        blockWeather.classList.add('weather-hide')
    } else {
        blockWeather.classList.remove('weather-hide')
    }

    if (!localStorage.getItem('weather')){
        timeRender.classList.add('time-hide')
    } else {
        timeRender.classList.remove('time-hide')
    }

    if (!localStorage.getItem('date')){
        dateRender.classList.add('date-hide')
    } else {
        dateRender.classList.remove('date-hide')
    }

    const setLocalStorageSetting = (item) => {
        if (localStorage.getItem(item)) {
            localStorage.setItem(item, '')
        } else {
            localStorage.setItem(item, 'checked')
        }
    }

    if (!localStorage.getItem('greeting')){
        blockGreeting.classList.add('greeting-container-hide')
    } else {
        blockGreeting.classList.remove('greeting-container-hide')
    }

    if (!localStorage.getItem('quote')){
        blockFooter.classList.add('greeting-container-hide')
    } else {
        blockFooter.classList.remove('greeting-container-hide')
    }

    if (!localStorage.getItem('audio')){
        blockPlayer.classList.add('player-hide')
    } else {
        blockPlayer.classList.remove('player-hide')
    }

    settingWeather.addEventListener('change', (e) => {
        blockWeather.classList.toggle('weather-hide')
        setLocalStorageSetting('weather')
    })

    settingTime.addEventListener('change',(e)=>{
        timeRender.classList.toggle('time-hide')
        setLocalStorageSetting('time')
    })

    settingDate.addEventListener('change',(e)=>{
        dateRender.classList.toggle('date-hide')
        setLocalStorageSetting('date')
    })

    settingGreeting.addEventListener('change',(e)=>{
        blockGreeting.classList.toggle('greeting-container-hide')
        setLocalStorageSetting('greeting')
    })

    settingQuote.addEventListener('change',(e)=>{
        blockFooter.classList.toggle('greeting-container-hide')
        setLocalStorageSetting('quote')
    })

    settingAudio.addEventListener('change',(e)=>{
        blockPlayer.classList.toggle('player-hide')
        setLocalStorageSetting('audio')
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
    if (localStorage.getItem('initialSetting')) {
        for (const argument of userConfig.blocks) {
            checkBoxEl.innerHTML += `<label for="${argument}">${local[argument]}</label>
        <input type="checkbox" name="" id="${argument}" ${localStorage.getItem(argument)}>`
        }
    } else {
        for (const argument of userConfig.blocks) {
            localStorage.setItem(argument, 'checked')
            checkBoxEl.innerHTML += `<label for="${argument}">${local[argument]}</label>
        <input type="checkbox" name="" id="${argument}" checked>`
        }
        localStorage.setItem('initialSetting', 'yes')
    }


    activateSetting()
}




