// creiamo la funzione generica per la creazione di elementi html
function createElement(tag, classToAdd) {
  const square = document.createElement(tag);
  square.classList.add(classToAdd);
  return square;
}

// variabile per delezionare la difficoltà nella griglia
let selectedDifficulty;

// funzione per creare una griglia in base alla difficoltà selezionata
function setupDifficultyGrid(cellNum, tag, classToAdd) {
  gridContainer.innerHTML = "";
  // aggiungiamo un ciclo inserire gli elementi
  for (i = 1; i < cellNum; i++) {
    //creo un nuovo square
    const newSquare = createElement(tag, classToAdd);
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
}

// funzione per dare uno stile ad un bottone
function colorBtn(element, backCol, col) {
  element.style.backgroundColor = backCol;
  element.style.color = col;
}
