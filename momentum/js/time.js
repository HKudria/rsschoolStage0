const timeRender = document.querySelector('.time')
const dateRender = document.querySelector('.date')
let locale = window.navigator.language.toUpperCase()
const day = new Date().toLocaleString(locale, {day:'numeric'})
console.log(locale)

const showDate = () =>{

    const date = new Date()
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    dateRender.textContent = date.toLocaleString(locale, options)
}

const showTime = () =>{
    const time = new Date()
    if (day !== time.toLocaleString(window.navigator.language, {day:'numeric'})) showDate()
    const options = {hour: 'numeric', minute: 'numeric', second: 'numeric' , hour12: false}
    timeRender.textContent = time.toLocaleString(window.navigator.language, options)
    setTimeout(showTime,1000)
}

showTime()
showDate()