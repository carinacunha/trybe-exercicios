function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Exercício 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for(value of dezDaysList){
    //Create element
    let days = document.createElement('li');
    days.className = 'day';
    days.innerText = (value);

    //Edit special cases
    if(value === 24 || value === 25 || value === 31){
        days.className = 'day holiday';
    }

    if(value === 4 || value === 11 || value === 18 || value === 25 ){
        days.className += ' friday';
    }

    //Add child to element
    let listDays = document.getElementById('days');
    listDays.appendChild(days);
  }


//Exercício 2

function createHolidayButton(nameButton) {

    let buttonContainer = document.querySelector('.buttons-container');
    let buttonHoliday = document.createElement('button');
    buttonContainer.appendChild(buttonHoliday);
    buttonHoliday.setAttribute('id', 'btn-holiday');

    buttonHoliday.innerText = nameButton;
}

createHolidayButton('Feriados');

//Exercício 3

let button = document.getElementById('btn-holiday');

function changeBackgroundDays(){

    let holidays = document.querySelectorAll('.holiday');

    for(value of holidays){
        if(value.style.backgroundColor == 'green'){
            value.style.backgroundColor = 'rgb(238,238,238)';
        }
        else{
            value.style.backgroundColor = 'green';
        }
    }
}

button.addEventListener('click', changeBackgroundDays);


//Exercício 4

function buttonFriday(nameDay) {

    let buttonFriday = document.createElement('button');
    let buttonContainer = document.querySelector('.buttons-container')
    buttonFriday.setAttribute('id', 'btn-friday');
    buttonContainer.appendChild(buttonFriday);
    buttonFriday.innerText = nameDay;
}

buttonFriday('Sexta-feira');

//Exercício 5

let getButtonFriday = document.getElementById('btn-friday');

function changeTextButtonFriday(){

    let fridays = document.querySelectorAll('.friday');
    let originalValues = [4, 11, 18, 25];

    for(value of fridays){
        let valueFridays = value.innerText = ('Uhuu!');
    }
}


getButtonFriday.addEventListener('click', changeTextButtonFriday);


//Exercício 6

function getZoom() {

    let getDays = document.querySelector('#days');

    getDays.addEventListener('mouseover', function(evt){
    evt.target.style.fontSize = '33px';
    })
}

function zoomOut(){
    let getDays = document.querySelector('#days');

    getDays.addEventListener('mouseout', function(evt){
    evt.target.style.fontSize = '20px';
    })
}

getZoom();
zoomOut();

//Exercício 7

function doIt(task){

    let newTasks = document.createElement('span');
    let myTasks = document.querySelector('.my-tasks');
    myTasks.appendChild(newTasks);
    newTasks.innerText = task;
}

doIt('Cozinhar');

//Exercício 8

function changeColor(color){

    let newDiv = document.createElement('div');
    let myTasks = document.querySelector('.my-tasks')
    newDiv.className = 'task';
    newDiv.style.backgroundColor = color;
    myTasks.appendChild(newDiv);
}

changeColor('green');


//Exercício 9

function addClass(event){
    let divTask = document.querySelector('.task');
    let selected = document.getElementsByClassName('task selected');
    // divClassName.classList.add = 'task selected';
    // }
    divTask.addEventListener('click', function(event){
        if(selected.length == 0){
            event.target.className = 'task selected';
        }
        else{
            event.target.className = 'task';
        }   
    });
}

addClass();


//Exercício 10


function dayColor() {

    let getDaysCalendar = document.querySelector('#days');
    let colorDiv = document.querySelector('.task').style.backgroundColor;
    
    getDaysCalendar.addEventListener('click', function(evt){
        evt.target.style.backgroundColor = colorDiv;
        })
}

dayColor();
