const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return data.species.reduce((accumulator, specie) => {
      // retornar todas as especies e sua quantidade
    }, {});
  }
}
console.log(countAnimals());
// residents.length

module.exports = countAnimals;
