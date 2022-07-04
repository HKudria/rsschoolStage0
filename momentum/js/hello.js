const userNameInput = document.querySelector('.name')
const greeting = document.querySelector('.greeting')

const welcomeMessage = () => {
    const messages = ['night','morning','afternoon','evening']
    greeting.textContent = `Good ${messages[Math.floor(getHours()/6)]}`
}

userNameInput.setAttribute('placeholder', 'your name')

const setLocalStorage = () => {
    let userValue = userNameInput.value.length>0?userNameInput.value:''
    localStorage.setItem('name', userValue);
}

const getLocalStorage = () => {
    userNameInput.value = localStorage.getItem('name');
}

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
