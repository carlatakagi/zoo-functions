const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalSpecie = data.species.find((specie) => specie.name === animal);
  return animalSpecie.residents.every((resident) => resident.age >= age);
}
console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
