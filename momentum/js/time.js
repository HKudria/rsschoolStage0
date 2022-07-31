const timeRender = document.querySelector('.time')
const dateRender = document.querySelector('.date')

const getTime = () => {
    return new Date()
}

const getHours = () => {
    return getTime().getHours()
}

let currentHour = 0

//if hour update we'll update welcome message, date and background
const showDate = () =>{
    currentHour = getHours()
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    dateRender.textContent = getTime().toLocaleString(getLocale(), options)
    welcomeMessage()
}

const checkHours = () => {
    if (currentHour !== getHours()) {
        showDate()
        setBG()
    }
}

const convertSecondToTime = (seconds) => {
    let newDate = new Date(parseInt(seconds*1000))
    const options = {minute: 'numeric', second: 'numeric'}
    return newDate.toLocaleString(getLocale(), options)
}

//every hour we check date and welcome message
const showTime = () => {
    const options = {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false}
    timeRender.textContent = getTime().toLocaleString(getLocale(), options)
    setTimeout(showTime, 1000)
    checkHours()
}
