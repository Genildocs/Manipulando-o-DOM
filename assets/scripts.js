function changeMode(){
    changeClasses()
    changeText()
}


function changeClasses(){ // FUNÇÃO ADICIONA A CLASSE DARK MODE EM TODOS OS ELEMENTOS DENTRO DA FUNÇÃO //
    botao.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)

}

function changeText(){ // FUNÇÃO ALTERA O TEXTO DO BOTÃO E DO H1 //
    const lightMode = "Modo Claro"
    const darkMode = "Modo Escuro"


    if(body.classList.contains(darkModeClass)){
        botao.innerHTML = lightMode
        h1.innerHTML = darkMode + " ON";
        return;
    }

    botao.innerHTML = darkMode
    h1.innerHTML = lightMode + " ON"
}


const darkModeClass = 'dark-mode'
const botao = document.getElementById('mode-selector');
const h1 = document.getElementById('pag-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

botao.addEventListener('click', changeMode) // METODO ESCUTA QUANDO É CLICADO O BOTÃO E APLICA A FUNÇÃO CHANGEMODE //



