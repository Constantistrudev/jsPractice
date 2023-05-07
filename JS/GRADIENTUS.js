let button = document.querySelector('.main__button');
let content = document.querySelector('.main__content');
let text = document.querySelector('.main__paragraph');
let input = document.querySelector('.main__input');

button.addEventListener('click', function (){
    let colors =[]
    if(input.value >=2){
        for(let i = 0; i<input.value;i++){
            colors[i]='#'+Math.floor(Math.random() *16777215).toString(16);
        }
        content.style.background = `linear-gradient(to bottom right,${colors})`;
        text.innerHTML = `colors: ${colors}`;
    }
    else alert('Ахтунг. В градиенте минимум 2 цвета');
})