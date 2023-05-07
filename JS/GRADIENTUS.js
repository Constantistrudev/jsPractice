let button = document.querySelector('.main__button');
let content = document.querySelector('.main__content');
let text = document.querySelector('.main__paragraph');
button.addEventListener('click', function (){
    let color1 = '#'+Math.floor(Math.random() *16777215).toString(16);
    let color2 = '#'+Math.floor(Math.random() *16777215).toString(16);
    content.style.background = `linear-gradient(to bottom right,${color1},${color2})`;
    text.textContent = `left color: ${color1} \n right color: ${color2}`;
})