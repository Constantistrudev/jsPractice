let flag = true;
const PI = 3.14;

// Что за фигура
function shapeDefinition(sidesCount){
    return ''
}
// Проверка на существование треугольника
function isTriangle(sidesArray){
    return true
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
                angleCalc(arr)
            }

            alert(`Периметр = ${perimetrCalc(arr)} \n Площадь = ${squareCalc(arr)}`)
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