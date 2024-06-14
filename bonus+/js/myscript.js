// richiamiamo il grid container in una variabile
const gridContainer = document.querySelector(".grid-container");

// recuper tutti i bottoni per la selezione della difficoltà
const easyBtn = document.getElementById("easy");
const mediumBtn = document.getElementById("medium");
const difficultBtn = document.getElementById("difficult");

//aggiungo un evento al bottone easy
easyBtn.addEventListener("click", function () {
  // funzione per cambiare colore al bottone quando viene cliccato
  colorBtn(easyBtn, "lightcoral", "white");
  // funzione per creare la griglia in base alla difficoltà selezionata
  setupDifficultyGrid(101, "div", "square10");
});

//aggiungo un evento al bottone medium
mediumBtn.addEventListener("click", function () {
  // funzione per cambiare colore al bottone quando viene cliccato
  colorBtn(mediumBtn, "lightcoral", "white");
  // funzione per creare la griglia in base alla difficoltà selezionata
  setupDifficultyGrid(82, "div", "square9");
});

//aggiungo un evento al bottone difficult
difficultBtn.addEventListener("click", function () {
  // funzione per cambiare colore al bottone quando viene cliccato
  colorBtn(difficultBtn, "lightcoral", "white");
  // funzione per creare la griglia in base alla difficoltà selezionata
  setupDifficultyGrid(50, "div", "square7");
});

// richiamiamo in una variabile il bottone per iniziare il gioco
const playBtn = document.querySelector(".play-btn");
// gli aggiungiamo un evento click
playBtn.addEventListener("click", function () {
  // al click aggiungiamo la classe show-grid alla griglia per renderla visibile
  gridContainer.classList.add("show-grid");
});
