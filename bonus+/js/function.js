// creiamo la funzione generica per la creazione di elementi html
function createElement(tag, classToAdd) {
  const square = document.createElement(tag);
  square.classList.add(classToAdd);
  return square;
}
