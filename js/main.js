const body = document.querySelector('body');
const foto = document.getElementById('foto');
const txtBg = document.getElementById('txt-bg');
const nome = document.getElementById('nome');
const areaDeAtuacao = document.getElementById('area-de-atuacao');
const icon = document.getElementById('icon');
const textoSobre = document.getElementById('texto-sobre');
const apresentacaoLinks = document.getElementById('apresentacao-links');
const tituloRedes = document.getElementById('titulo-redes');
const portfolio = document.getElementById('portfolio');
const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const changeTheme = document.getElementById('change_theme');

function onLoad() {
    setTimeout(() =>  foto.style.opacity = '1' , 500);
    setTimeout(() => {
        txtBg.style.opacity = '1'
        txtBg.style.marginLeft = '0'
    } , 1000);
    setTimeout(() =>  nome.style.opacity = '1' , 1500);
    setTimeout(() =>  nome.style.top = '0' , 2000);
    setTimeout(() => {
        areaDeAtuacao.style.opacity = '1'
        icon.style.opacity = '1'
    }, 2500);
    setTimeout(() =>  textoSobre.style.opacity = '1' , 3000);
    setTimeout(() => {
        apresentacaoLinks.style.top = '0'
        apresentacaoLinks.style.opacity = '1'        
    }, 3500);
    setTimeout(() =>  changeTheme.style.opacity = '1' , 4000);
}


setTimeout(onLoad, 500);

const toggle = document.getElementById('toggle');
const indicator = document.getElementById('indicator');
toggle.onclick = () => {
    toggle.classList.toggle('active')
    indicator.classList.toggle('active')
    body.classList.toggle('active')
    foto.classList.toggle('active')
    txtBg.classList.toggle('active')
    areaDeAtuacao.classList.toggle('active')
    icon.classList.toggle('active')
    apresentacaoLinks.classList.toggle('active')
    tituloRedes.classList.toggle('active')
    portfolio.classList.toggle('active')
    linkedin.classList.toggle('active')
    github.classList.toggle('active')
    sun.classList.toggle('active')
    moon.classList.toggle('active')
}