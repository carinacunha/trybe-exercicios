//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

let array = [
    23, 4, 11, 20, 21, 15,  9, 23,
    13, 3, 20, 25, 25, 25, 22,  1,
    11, 9, 13, 15, 14, 21,  4, 10
  ];

let resultado = []

  for(let index = 0; index < array.length; index += 1){
    resultado.push(array[index]/2);
  }
  console.log(resultado);
