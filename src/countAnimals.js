const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui - Esta função é responsável por contabilizar a quantidade de animais de cada espécie.
  // retornar um objeto com todas as especies e sua quantidade - chave e valor
  if (!animal) {
    return data.species.reduce((specieObj, specie) => {
      const specieObjCopy = specieObj;
      specieObjCopy[specie.name] = specie.residents.length;
      return specieObjCopy;
    }, {});
  }

  // retorna um número, a quantidade de animal no zoológico;
}

console.log(countAnimals());
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
