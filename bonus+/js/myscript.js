// richiamiamo il grid container in una variabile
const gridContainer = document.querySelector(".grid-container");
// recuper tutti i bottoni per la selezione della difficoltà
const easyBtn = document.getElementById("easy");
const mediumBtn = document.getElementById("medium");
const difficultBtn = document.getElementById("difficult");

easyBtn.addEventListener("click", function () {
  // aggiungiamo un ciclo inserire gli elementi
  for (i = 1; i < 101; i++) {
    //creo un nuovo square
    const newSquare = createElement("div", "square10");
    // creo una variabile per stampare in console il numero della cella che viene cliccata
    const squareNum = "Il numero della cella è: " + i;

    // aggiungo un evento al click ad ogni nuovo box
    newSquare.addEventListener("click", function () {
      // aggiungo la classe per dare il colore ad ogni cella che viene cliccata
      newSquare.classList.add("clicked");
      // stampo in console il numero della cella che viene cliccata
      console.log(squareNum);
    });

    // inserisco il nuovo square nel mio container html
    gridContainer.append(newSquare);
  }
});

mediumBtn.addEventListener("click", function () {
  // aggiungiamo un ciclo per inserire gli elementi
  for (i = 1; i < 82; i++) {
    //creo un nuovo square
    const newSquare = createElement("div", "square9");
    // creo una variabile per stampare in console il numero della cella che viene cliccata
    const squareNum = "Il numero della cella è: " + i;

    // aggiungo un evento al click ad ogni nuovo box
    newSquare.addEventListener("click", function () {
      // aggiungo la classe per dare il colore ad ogni cella che viene cliccata
      newSquare.classList.add("clicked");
      // stampo in console il numero della cella che viene cliccata
      console.log(squareNum);
    });

    // inserisco il nuovo square nel mio container html
    gridContainer.append(newSquare);
  }
});

difficultBtn.addEventListener("click", function () {
  // aggiungiamo un ciclo inserire gli elementi
  for (i = 1; i < 50; i++) {
    //creo un nuovo square
    const newSquare = createElement("div", "square7");
    // creo una variabile per stampare in console il numero della cella che viene cliccata
    const squareNum = "Il numero della cella è: " + i;

    // aggiungo un evento al click ad ogni nuovo box
    newSquare.addEventListener("click", function () {
      // aggiungo la classe per dare il colore ad ogni cella che viene cliccata
      newSquare.classList.add("clicked");
      // stampo in console il numero della cella che viene cliccata
      console.log(squareNum);
    });

    // inserisco il nuovo square nel mio container html
    gridContainer.append(newSquare);
  }
});

// richiamiamo in una variabile il bottone per iniziare il gioco
const playBtn = document.querySelector(".play-btn");
// gli aggiungiamo un evento click
playBtn.addEventListener("click", function () {
  // al click aggiungiamo la classe show-grid alla griglia per renderla visibile
  gridContainer.classList.add("show-grid");
});
