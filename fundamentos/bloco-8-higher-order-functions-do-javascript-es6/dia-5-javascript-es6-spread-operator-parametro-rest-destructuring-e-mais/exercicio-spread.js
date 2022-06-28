// Faça uma lista com as suas frutas favoritas
const specialFruit = ['laranja', 'banana', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'suco de laranja', 'raspad de côco'];

const fruitSalad = (fruit, additional) => {
  const salada = [...fruit, ...additional];
  return salada;
};

console.log(fruitSalad(specialFruit, additionalItens));