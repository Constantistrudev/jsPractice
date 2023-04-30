let flag = true;
const PI = 3.14;

// Что за фигура
function shapeDefinition(sidesCount){
    return ''
}
// Проверка на существование треугольника
function isTriangle(sidesArray){
    for(let i =1; i<=sidesArray.length-1;i++) {
        if(i==sidesArray.length-1){
            if (sidesArray[i-1] + sidesArray[i] > sidesArray[0] && sidesArray[i] + sidesArray[0] > sidesArray[i-1] && sidesArray[0] + sidesArray[i-1] > sidesArray[i] && sidesArray[i] + sidesArray[0] > sidesArray[1] && sidesArray[0] + sidesArray[1] > sidesArray[i] && sidesArray[1] + sidesArray[i] > sidesArray[1]) {
                return true;
            }
        }
        else if (sidesArray[0] + sidesArray[1] > sidesArray[2] && sidesArray[1] + sidesArray[2] > sidesArray[0] && sidesArray[2] + sidesArray[0] > sidesArray[1]) {
            return true;
        }
    }
}
//Периметр
function perimetrCalc(sidesArray){
    let perimetr = 0;
    for(let i =0; i<sidesArray.length;i++){
        perimetr+=sidesArray[i];
    }
    return perimetr
}
//Площадь
function squareCalc(sidesArray){
    let square = 1;
    for(let i =0; i<sidesArray.length;i++){
        square*=sidesArray[i]**0.5;
    }
    return square.toFixed(2)
}
//Углы
function angleCalc(sidesArray){
    //провести подстчет по треугольникам.
}

while(flag){
    let sides = parseInt(prompt("Количество сторон",''));
    let shape = shapeDefinition(sides);

    if(sides == 0){
        let radius = parseInt(prompt("Введите радиус",''));
        alert(`${shape}\n Радиус = ${radius} \n Площадь = ${radius*(PI**2)} \n Длина окружности = ${radius*2*PI}`)
    }
    else if (sides >=3){
        let arr=[];
        for(let i=0;i<sides;i++){
            arr[i]= Math.abs(parseInt(prompt("Длина стороны. Целое число",0)));
        }
        if(arr.indexOf(0)==-1){
            if(isTriangle(arr)){
                alert(`Периметр = ${perimetrCalc(arr)} \n Площадь = ${squareCalc(arr)}`)
                angleCalc(arr)
            }
        }
        else{
            alert('Такой фигуры нету');
        }
    }
    else{
        alert('Такой фигуры нету');
    }
    flag = confirm('Продолжить?')
}