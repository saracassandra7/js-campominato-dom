/*
1) fare la griglia, che si trova nel game wrapper, compare al click di play ed ha una dimensione diversa in base al livello
2)una volta generata la griglia, genero le celle. Ognuna dovrà avere un ID
3) generare le bombe
4) gestire il click della cella: se c'è una bomba la cella diventa rossa e il gioco finisce, altrimenti diventa blu e si può continuare a giocare, ma solo se ha ancora dei tentativi
5) esprimere i risultati (vinto o perso)*/

const main = document.querySelector('.game-wrapper');
const playBtn = document.querySelector('#play');
const levelSelect = document.querySelector('#level');

const gridLevels = [100, 81, 49];
const BOMBS_NUMBER = 2;
let bombs = [];
let score = 0;

playBtn.addEventListener('click', play);

function play(){
  //in base al value stabilisco in numero di celle (cambia in base al livello scelto);
  const cellNumbers = gridLevels[levelSelect.value];

  //genero la griglia tramite una funzione
  generatePlayGround(cellNumbers);

  //genero le bombe
  bombs = generateBombs(cellNumbers);
}

function generatePlayGround(cellNumbers){
  //creo la griglia e gli aggiungo la classe
  const grid = document.createElement('div');
  grid.className = 'grid';
  //genero le celle
  for(let i = 1; i <= cellNumbers; i++){
    const cell = generateCell(i, cellNumbers);
    grid.append(cell);
  }
  main.append(grid);

}

//funzione che genera le celle
function generateCell (cellId, cellNumbers){
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.classList.add('square' + cellNumbers); //cambia in base alla griglia

  //creo proprietà custom per assegnare Id alla cella
  cell.cellId = cellId;
  cell.innerHTML = ` <span>${cellId}</span>`;

  //evento al click della cella
  cell.addEventListener('click', handleClickCell);

  return cell;
}

//funzione che genera le bombe
function generateBombs(cellNumbers){
  //genero gli Id delle bombe e li salvo in un array che restituisco
  const bombsGenerated = [];

  //ciclo fino a quando non ho generato il numero di bombe necessarie
  while(bombsGenerated.length<BOMBS_NUMBER){
    const bomb = generateRandomNumber(1, cellNumbers); //funzione che genera bombe tramite numero random

    // se il numero è presente nell'array di bombe, lo pusho
    if(!bombsGenerated.includes(bomb)){
      bombsGenerated.push(bomb);
    }
  }
  console.log('bombe', bombsGenerated);
  return bombsGenerated;
}

//funzione che gestisce il click della cella
function handleClickCell(){
  console.log(this.cellId);

  //verifico se ho pestato una bomba, ovvero de l'Id della cella è presente nell'array bombs
  if(! bombs.includes(this.cellId)){
    //aggiungo classe della cella cliccata
    this.classList.add('clicked'); 
    score++;
    
    const cells = document.getElementsByClassName('cell');
    if(score === cells.length - BOMBS_NUMBER){
      endGame(true);
    }

  } else {
    endGame(false);
    this.classList.add('bombed');
  }
}

//funzione che gestisce la fine del gioco
function endGame(isWin){
  let msg;

  const cells = document.getElementsByClassName('cell');
  if(isWin){
    msg = `HAI VINTO! Hai cliccato tutte le caselle giuste!`

  }else{
    msg = `HAI PERSO! Hai fatto ${score} punti su ${cells.length - BOMBS_NUMBER} possibilità!`
  }

  document.querySelector('.endMessage').innerHTML = msg;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random()*(max - min + 1)) + min;
}
