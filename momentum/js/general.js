const userConfig = {
    lang: 'en',
    blocks: ['time', 'date','greeting', 'quote', 'weather', 'audio', 'todolist']
}

const enLocale = {
    wind: 'Wind speed ',
    hum: 'Humidity ',
    errorServer: 'Sorry, we can\'t load data.',
    errorTry: 'Please try again later or check your input data',
    message: ['Good night','Good morning','Good afternoon','Good evening'],
    placeholder: '[Enter name]',
    ms: 'm/s',
    time: 'Time',
    date: 'Date',
    greeting: 'Greeting',
    quote: 'Quote',
    weather: 'Weather',
    audio: 'Audio',
    todolist: 'ToDo List',
    choseLocal: 'Chose language',
    ru: 'Russia',
    en: 'English'
}

const ruLocale = {
    wind: 'Скорость ветра ',
    hum: 'Влажнасть ',
    errorServer: 'Извините, мы не можем загрузить данные. ',
    errorTry: 'Пожалуйста попробуйте позже или проверьте правильность введеных данных',
    message: ['Доброй ночи','Доброе утро','Добрый день','Добрый вечер'],
    placeholder: '[Введите имя]',
    ms: 'м/с',
    time: 'Время',
    date: 'Дата',
    greeting: 'Приветсвие',
    quote: 'Цытаты',
    weather: 'Погода',
    audio: 'Аудиоплеер',
    todolist: 'Список дел',
    choseLocal: 'Выберите язык',
    ru: 'Русский',
    en: 'Английский'
}

const checkBoxEl = document.querySelector('.checkBoxElement')

const setLocale = () => {
    localStorage.setItem('locale', userConfig.lang)
}

const getLocale = () => {
    if (localStorage.getItem('locale')) {
        return localStorage.getItem('locale')
    } else {
        setLocale()
        getLocale()
    }
}

if(!localStorage.getItem('city')) localStorage.setItem('city', getLocale()==='en'?'Minsk':'Минск')

let local = getLocale()==='en'?enLocale:ruLocale

document.addEventListener("DOMContentLoaded", function (event) {
    renderCheckBox()
    showTime()
});
