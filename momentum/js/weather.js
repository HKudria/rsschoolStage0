const apiKeyWeather = '787add4f58135d5e11a67bc4b64a8e36'
let city = getLocale()==='en'?'Minsk':'Минск'
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherWind = document.querySelector('.wind');
const weatherHumidity = document.querySelector('.humidity');
const cityInput = document.querySelector('.city');
cityInput.value = city


const weatherError = () => {
    weatherIcon.className = ''
    temperature.textContent = local.errorServer
    weatherDescription.textContent = local.errorTry
    weatherWind.textContent = local.wind
    weatherHumidity.textContent = local.hum
}

const parseWeather = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${getLocale()}&appid=${apiKeyWeather}&units=metric`)
        return await response.json()
    } catch (err) {
       weatherError()
        return null
    }
}

const setWeather = () => {
    let parse = parseWeather();
    if (parse) {
        parse.then(data => {
            weatherIcon.className = 'weather-icon owf';
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);
            temperature.textContent = `${data.main.temp}°C`;
            weatherDescription.textContent = data.weather[0].description;
            weatherWind.textContent = local.wind + data.wind.speed + local.ms
            weatherHumidity.textContent = local.hum + data.main.humidity;
        })
    }
}

setWeather()

cityInput.addEventListener('keydown',(e)=>{
    if (e.keyCode === 13) {
        city = cityInput.value
        setWeather()
    }
})
