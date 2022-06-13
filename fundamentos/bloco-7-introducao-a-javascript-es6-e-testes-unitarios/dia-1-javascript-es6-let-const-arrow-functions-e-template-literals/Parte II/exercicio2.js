const biggest = (sentence) => {
  const string = sentence.split(' ');
  let maxLength = 0;
  let biggestWord = '';

  for(let word of string){
    if(word.length > maxLength){
      maxLength = word.length;
      biggestWord = word;
    }
  }
  return biggestWord;
};


console.log(biggest('Cachorro maravilhoso'))