const body = document.querySelector('body');
const cabecalho = document.getElementById('cabecalho');
const toggle = document.getElementById('toggle');
const indicator = document.getElementById('indicator');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const changeTheme = document.getElementById('change_theme');
const rodape = document.getElementById('rodape');

const txtBg = document.getElementById('txt-bg');
let theme = sessionStorage.getItem('theme');


if (theme == null) {
    theme = sessionStorage.setItem('theme', 'dark');
}

toggle.onclick = () => {
    toggle.classList.toggle('active')
    indicator.classList.toggle('active')
    body.classList.toggle('active')
    sun.classList.toggle('active')
    moon.classList.toggle('active')
    rodape.classList.toggle('active')
    cabecalho.classList.toggle('active')
    txtBg.classList.toggle('active')
    
    if (theme == 'dark') {
        theme = 'light'
        sessionStorage.setItem('theme', 'light');
        theme = sessionStorage.getItem('theme')
    } else {
        theme = 'dark'
        sessionStorage.setItem('theme', 'dark');
        theme = sessionStorage.getItem('theme')
    }

}

if (theme == 'light') {
    toggle.classList.toggle('active')
    indicator.classList.toggle('active')
    body.classList.toggle('active')
    sun.classList.toggle('active')
    moon.classList.toggle('active')
    rodape.classList.toggle('active')
    cabecalho.classList.toggle('active')
    txtBg.classList.toggle('active')
}