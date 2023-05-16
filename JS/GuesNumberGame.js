let containerInput = document.querySelector('.container__input');
let containerButton = document.querySelector('.container__button');
let messageText = document.querySelector('.container__message-text');
let count = document.getElementById("count");
let gues = document.getElementById("gues");
let answers = [];
containerButton.addEventListener('click', () => 
{
    if(containerInput.textContent === 'null' || containerInput.value === ''){
        alert("Введите число");
    }
    else{
        count.innerHTML = ++count.innerHTML;
        let number =Math.floor(Math.random()*100);
        if( number != containerInput.value ){
            if(answers.indexOf(containerInput.value) == -1)
            {
            answers.push(parseInt(containerInput.value));
            gues.innerHTML += `${answers}, `;
            }

            if(number > containerInput.value){
            }
            else {
                
            }
        }
        else{
            messageText.innerHTML="Correct"
            messageText.classList.remove('none');
            messageText.classList.add('correct');
        }  
    }  
});
