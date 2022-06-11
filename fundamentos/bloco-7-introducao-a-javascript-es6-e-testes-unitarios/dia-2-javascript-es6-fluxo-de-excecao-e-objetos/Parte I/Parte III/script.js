const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTurn(object, key, value){
  object[key] = value;
}

addTurn(lesson2, 'turno', 'noite');

console.log(lesson2);

function keysList(object){
  console.log(Object.keys(object));
}

keysList(lesson3);

function lenghtObject(object){
  console.log(Object.keys(object).length)
}

lenghtObject(lesson1);

function valuesObject(object){
  console.log(Object.values(object))
}

valuesObject(lesson1);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
console.log(allLessons);

function totalStudent(object){
  sum = Object.values(object)
  console.log(sum)
}

function totalStudent(object){
  let sum = 0;
  let list = Object.keys(object);
  for(index in list){
    sum = sum + object[list[index]].numeroEstudantes; 
  }
  console.log(sum)
}

totalStudent(allLessons)

function specificKey(object, number){
  console.log(Object.values(object)[number]);
}

specificKey(lesson1, 2);


function belong(object, key, value){
  let array = Object.entries(object);
  let equal = false;
  for(let index in array){
    if (array[index] === key && array[index][1] === value) equal = true;
  }
  console.log(equal);
  
}

belong(lesson1, 'professor', 10);