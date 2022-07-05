const userNameInput = document.querySelector('.name')
const greeting = document.querySelector('.greeting')

const enLocale = {
    wind: 'Wind speed ',
    hum: 'Humidity ',
    errorServer: 'Sorry, server is not available.',
    errorTry: 'Please try again later',
    message: ['Good night','Good morning','Good afternoon','Good evening'],
    placeholder: '[Enter name]',
    ms: 'm/s'
}

const ruLocale = {
    wind: 'Скорость ветра ',
    hum: 'Влажнасть ',
    errorServer: 'Извините, сервер не доступен. ',
    errorTry: 'Пожалуйста попробуйте позже',
    message: ['Доброй ночи','Доброе утро','Добрый день','Добрый вечер'],
    placeholder: '[Введите имя]',
    ms: 'м/с'
}

const local = getLocale()==='en'?enLocale:ruLocale


const welcomeMessage = () => {
    greeting.textContent = local.message[Math.floor(getHours()/6)]
}

userNameInput.setAttribute('placeholder', local.placeholder)

const setLocalStorage = () => {
    let userValue = userNameInput.value.length>0?userNameInput.value:''
    localStorage.setItem('name', userValue);
}

const getLocalStorage = () => {
    userNameInput.value = localStorage.getItem('name');
}

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
