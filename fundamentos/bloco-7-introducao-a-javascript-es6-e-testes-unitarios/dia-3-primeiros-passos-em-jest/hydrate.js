const hydrate = (string) => {
  let regex = /\d+/g;
  let result = (string.match(regex));
  let sum = 0;
  
  for(value of result){
      sum = sum + parseInt(value);
  }
  
  if(sum === 1){
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

module.exports = hydrate;