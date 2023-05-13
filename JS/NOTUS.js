function paste(){
    list.innerHTML+=`<li>${input.value}</li>`
}

let input = document.querySelector(".header__input-field");
const list = document.querySelector(".list-block__list");
const button = document.querySelector(".button");

button.addEventListener("click", () => { paste()})
button.addEventListener("touch", () => { paste()})
