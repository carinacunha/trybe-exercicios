// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function prevent(event) {
  event.preventDefault();
}

HREF_LINK.addEventListener('click', prevent);

function preventCheck(evt) {
  evt.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', preventCheck);


function preventText(evento) {
  const letter = evento.key;
    if (letter !== 'a'){
      evento.preventDefault();
    }
  }

INPUT_TEXT.addEventListener('keypress', preventText);