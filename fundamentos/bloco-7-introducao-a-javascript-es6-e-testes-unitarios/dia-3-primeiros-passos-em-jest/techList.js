const techList = (array, name) => {
  if(array.length === 0){
    return 'Vazio!';
  };

  const sortArray = array.sort();
  const tecnology = [];
  
  for(value of sortArray){
    tecnology.push({
      tech: value, name,
    });
  }

  return tecnology;
};

module.exports = techList;