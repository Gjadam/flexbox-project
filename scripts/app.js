let menu = document.getElementById('header-menu')
let headerIcon = document.querySelector('.header__icon')
let icon = document.getElementById('icon')
let flag = true
headerIcon.addEventListener('click' , function () {
    if (flag === true) {
        menu.style.left = '0'
        flag = false
        headerIcon.classList.add('rotateIcon')
    } else {
        menu.style.left = '-256px'
        flag = true
        headerIcon.classList.remove('rotateIcon')
    }
    
})