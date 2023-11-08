let gameMode = document.getElementById("gamemode");
let numCells;
let grid = document.getElementById("grid");
let playBtn = document.getElementById("playBtn");
let squareDim;
let bombs = [];
let points=0;
let gameState = false;

/*** PULSANTE PLAY AVVIO GIOCO ***/
playBtn.addEventListener("click", function() {
    
    gameState=true;

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
        let oneCell = buildSquare(i, bombs);
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
        
        if(gameState==true){

            for(let i=1; i<=16; i++){
    
                if(number == bombs[i]){
                    cell.classList.toggle("bomb");
                    alert(`GAME OVER! Hai fatto ${points} punti.`);
                    gameState=false;
                    break;
                }
            }
            cell.classList.toggle("selected");
            points += 1;
            console.log(points);
        }else{
            points=0;
            alert("LA PARTITA E' CONCLUSA, CLICCA PLAY PER RICOMINCIARE.")
        }
        
    });
    return cell;
}

/*** FUNZIONE GENERA NUMERI CASUALI ***/
function randomNumberGen(max){
    return Math.floor(Math.random() * max);
}