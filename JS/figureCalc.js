let flag = true;
const PI = 3.14;
while(flag){
    let cicle = parseInt(prompt("Количество сторон",''));
    if(cicle ==0){
        let radius = parseInt(prompt("Введите радиус",''));
        alert(`Круг\n Радиус = ${radius} \n Площадь = ${radius*(PI**2)} \n Длина окружности = ${radius*2*PI}`)
    }
    // else if (cicle ==3){
    //     /*
    //     провекрка на существование треугольника
    //         поиск площади, периметра, углов, высоты
    //     вывод
    //     */
    //     let arr=[];
    //     for(let i=0;i<cicle;i++){
    //         arr[i]= parseInt(prompt("Длина стороны. Целое число",0));
    //     }

    // }
    else if (cicle >=3){
        let arr=[];
        for(let i=0;i<cicle;i++){
            arr[i]= parseInt(prompt("Длина стороны. Целое число",0));
        }
        if(arr.indexOf(0)==-1){
            let perimetr = 0;
            for(let i =0; i<arr.length;i++){
                perimetr+=arr[i];
            }
            let square = 1;
            for(let i =0; i<arr.length;i++){
                square*=arr[i]**0.5;
            }
            alert(`Периметр = ${perimetr} \n Площадь = ${square.toFixed(2)}`)
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