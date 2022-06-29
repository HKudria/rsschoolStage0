document.addEventListener("DOMContentLoaded", function () {

    const openPopupMenu = document.querySelector('#popupMenu')
    const popup = document.querySelector('.popup')
    const popupFrame = document.querySelector('.popup-frame')
    const singIn = document.querySelector('.singInButton')
    const register = document.querySelector('#registerButton')

    const showMenu = () => {
        popup.classList.add('show')
        window.setTimeout(showMenu, 10)

        function showMenu() {
            popupFrame.classList.add('callPopup')
        }
    }

    const closePopup = (event) => {
        if (event.target.className === 'popup show') {
            popupFrame.classList.remove('callPopup')
            window.setTimeout(showMenu, 1800)

            function showMenu() {
                popup.classList.remove('show')
            }
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        let emailValue = document.querySelector('#formEmail').value
        let passwordValue = document.querySelector('#formPassword').value
        window.alert(`Your email: ${emailValue};\nYour password ${passwordValue}`)
    }

    const renderRegisterForm = () => {

    }

    openPopupMenu.addEventListener('click', showMenu);
    popup.addEventListener('click', closePopup);
    singIn.addEventListener('click', submitForm);
    register.addEventListener('click', renderRegisterForm);


});

