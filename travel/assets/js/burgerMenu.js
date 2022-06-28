const openBurgerMenu = document.getElementById('openBurgerMenu')
const closeBurgerMenu = document.getElementById('closeBurgerMenu')
const burgerMenu = document.getElementById('burgerMenu')
const body = document.getElementById('body')


openBurgerMenu.addEventListener('click',() => {
    body.classList.add('show')
    window.setTimeout(showMenu,1)
    function showMenu() {
        burgerMenu.classList.add('open')
    }
})

closeBurgerMenu.addEventListener('click',closeMenu)
body.addEventListener('click',closeMenu)

function closeMenu(event){
    if(event.target.tagName === 'DIV' || event.target.tagName === 'IMG' || event.target.textContent === 'account'){
        burgerMenu.classList.remove('open')
        window.setTimeout(showMenu,800)
        function showMenu() {
            body.classList.remove('show')
        }
    }
}

