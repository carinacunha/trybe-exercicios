const buttonSubmit = document.getElementById('send');

function silenceSubmit(event) {
  event.preventDefault();
}

buttonSubmit.addEventListener('click', silenceSubmit)