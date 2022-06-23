//Exercício 1
// const person = (nomeCompleto) => {
//   const nome = nomeCompleto.toLowerCase();
//   const nomeEmail = nome.split(' ').join ('_');
//   return {nomeCompleto, email:`${nomeCompleto}, ${nomeEmail}@trybe.com`};
// }

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'), 
//     id3: callback('Carla Paiva'), 
//   }
//   return employees;
// };

// console.log(newEmployees(person));

//Exercício 2
// const check = (numberChoice, numberRaffle) => {
//   if (numberChoice === numberRaffle){
//     return 'Parabéns você ganhou';
//   }
//   else{
//     return 'Tente novamente';
//   } 
// };

// const generateNumber = (numberChoice, callback) => {
//   let numberRaffle = Math.floor(Math.random() * (1, 5));
//   return callback(numberChoice, numberRaffle);
// };
// console.log(generateNumber(2, check));

//Exercício 3

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


function checkAnswers(rightAnswer, studentAnswer) {
  let counter = 0;
  for (let index = 0; index < rightAnswer.length; index += 1){
    if(rightAnswer[index] === studentAnswer[index]){
      counter += 1;
    } else if(studentAnswer[index] === 'N.A') {
      counter += 0;
    } else {
      counter -= 0.5;
    }
  }
  return counter;
};

const points = (rightAnswer, studentAnswer, callback) => {
  return callback(rightAnswer, studentAnswer);
};

console.log(points(rightAnswers, studentAnswers, checkAnswers));
