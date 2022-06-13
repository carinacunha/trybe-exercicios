const replaceWord = (nome) => {
  const frase = 'Tryber x aqui!';
  const array = frase.split(' ');

  for(let index in array){
    if (array[index] === 'x') {
      array[index] = nome;
    }
  }
  return array.join(' ');
};

console.log(replaceWord('Carina'));

const newString = (replaceWord) => {
  const input = replaceWord;
  const skills = ['CSS', 'HTML', 'JS']
  console.log(`${input} \n
  Minhas três principais habilidades são: ${skills}.`)
};

newString(replaceWord('Carina'));