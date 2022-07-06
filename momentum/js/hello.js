const userNameInput = document.querySelector('.name')
const greeting = document.querySelector('.greeting')

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

