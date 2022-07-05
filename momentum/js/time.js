const timeRender = document.querySelector('.time')
const dateRender = document.querySelector('.date')
let currentHour = 0

const getLocale = () => {
    if(window.navigator.language==='ru') return 'ru'
    return 'en'
}

const getTime = () => {
    return new Date()
}

const getHours = () => {
    return getTime().getHours()
}

//if hour update we'll update welcome message, date and background
const showDate = () =>{
    currentHour = getHours()
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    dateRender.textContent = getTime().toLocaleString(getLocale(), options)
    welcomeMessage()
}

//every hour we check date and welcome message
const showTime = () => {
    if (currentHour !== getHours()) showDate()
    const options = {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false}
    timeRender.textContent = getTime().toLocaleString(getLocale(), options)
    setTimeout(showTime, 1000)
}


