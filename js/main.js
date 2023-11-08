let gameMode = document.getElementById("gamemode");
let numCells;
let grid = document.getElementById("grid");
let playBtn = document.getElementById("playBtn");
let squareDim;
let bombs = [];

/*** PULSANTE PLAY AVVIO GIOCO ***/
playBtn.addEventListener("click", function() {
    
    /** SVUOTA IL CAMPO DI GIOCO ***/
    grid.innerHTML = "";

    /*** VERIFICA MODALITA DI GIOCO ***/
    if(gameMode.value == 1){
        numCells = 100;
        squareDim = "squareEasy"
    }else if(gameMode.value == 2){
        numCells = 81;
        squareDim = "squareMedium"
    }else{
        numCells = 49;
        squareDim = "squareDifficult"
    }



    for (let i = 1; i <= numCells; i++){
        let oneCell = buildSquare(i);
        grid.appendChild(oneCell);

        if(i<16){
            bombs.push(randomNumberGen(numCells));
        }
    }

    console.log(bombs);
});





/*** FUNZIONE CREA QUADRATI***/
function buildSquare(number, bombs) {
    const cell = document.createElement("div");
    cell.classList.add(squareDim);
    cell.innerHTML = number;
    
    cell.addEventListener("click", function(){
        
        for(let i=1; i<=16; i++){

            if(number == bombs[i]){
                cell.classList.toggle("bomb");
                alert("GAME OVER!")
                break;
            }else{
            cell.classList.toggle("selected");
            console.log(number);
            }
        }
        
    });
    return cell;
}

/*** FUNZIONE GENERA NUMERI CASUALI ***/
function randomNumberGen(max){
    return Math.floor(Math.random() * max);
}