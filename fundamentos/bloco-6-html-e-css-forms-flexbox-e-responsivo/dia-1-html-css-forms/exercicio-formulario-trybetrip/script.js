const buttonSubmit = document.getElementById('send');

function silenceSubmit(event) {
  event.preventDefault();
}
buttonSubmit.addEventListener('click', silenceSubmit);


const buttonClear = document.getElementById('clear');
const form = document.getElementById('form');
function reset(){
  form.reset();
}
buttonClear.addEventListener('click', clearInfo)


// Second way

// const inputs = document.querySelectorAll('#name, #email, .destiny, #textbox, #date, .news, .permission');
// function clearInfo(){
//   inputs.forEach(input => {
//     input.value = "";
//   });
// }

// buttonClear.addEventListener('click', clearInfo);

