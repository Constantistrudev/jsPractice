function start(cells){
    let i = 0
    for(let cell of cells){
        cell.addEventListener('click', function (){
            if(this.textContent ===''){
                this.textContent = ['X','O'][i%2];
                if(isVictory(cells))
                {
                    alert(`${this.textContent} is win`)
                    location.reload()
                }
                else if (i==8)
                {
                    alert(` is tie`)
                    location.reload()
                }
                ++i;
            }
        });
    }
}
function isVictory(cells){
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for(let comb of combs){
        if(
            cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent !=''
        ){
            console.log(`${cells[comb[0]].textContent} + ${cells[comb[1]].textContent} + ${cells[comb[2]].textContent} in cells [${comb[0]},${comb[1]},${comb[2]}] `)
        return true
        }
    }
}

let cells = document.querySelectorAll('#field td');
start(cells)
