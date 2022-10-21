/*L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

1) fare la griglia, che si trova nel game wrapper, compare al click di play ed ha una dimensione diversa in base al livello*/

const main = document.querySelector('.game-wrapper');
const playBtn = document.querySelector('#play');
const levelSelect = document.querySelector('#level');

const gridLevels = [100, 81, 49];


playBtn.addEventListener('click', play);

function play(){
  //in base al value stabilisco in numero di celle (cambia in base al livello scelto);
  const cellNumbers = gridLevels[levelSelect.value];

  //genero la griglia tramite una funzione
  generatePlayGround(cellNumbers);
}

function generatePlayGround(){
  //creo la griglia e gli aggiungo la classe
  const grid = document.createElement('div');
  grid.className = 'grid';

  //

}
