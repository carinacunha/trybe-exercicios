const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(names) {
  return names.reduce((acc, curr) => 
                      (acc + curr).toLowerCase()).split('')
                      .reduce((acc, curr) => {
                        if (curr === 'a') {
                          return acc + 1;
                        }
                        return acc;
                      }, 0);

}

console.log(containsA(names))
