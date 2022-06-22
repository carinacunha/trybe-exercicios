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



