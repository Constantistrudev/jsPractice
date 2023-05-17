let containerInput = document.querySelector('.container__input');
let containerButton = document.querySelector('.container__button');
let messageText = document.querySelector('.container__message-text');
let count = document.getElementById("count");
let gues = document.getElementById("gues");
let number =Math.floor(Math.random()*100)+1;
let answers = [];
containerButton.addEventListener('click', () => 
{
    if(containerInput.textContent === 'null' || containerInput.value === ''){
        alert("Введите число");
    }
    else{
        count.innerHTML = ++count.innerHTML;

        if( number != containerInput.value ){
            if(parseInt(answers.indexOf(containerInput.textContent)) == -1)
            {
            answers.push(parseInt(containerInput.value));
            console.log(answers);
            gues.innerHTML = `${answers}, `;
            }
            if(number > containerInput.value){
                messageText.innerHTML="Wrong. Number is higher";
                messageText.classList.remove('none');
                messageText.classList.add('wrong');
            }
            else {
                messageText.innerHTML="Wrong. Number is lower";
                messageText.classList.remove('none');
                messageText.classList.add('wrong');
            }
        }
        else{
            messageText.innerHTML="Correct"
            messageText.classList.remove('none');
            messageText.classList.remove('wrong');
            messageText.classList.add('correct');
            setTimeout(()=>location.reload(),2000);

        }  
    }  
});
