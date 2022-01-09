const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui - Esta função é responsável por contabilizar a quantidade de animais de cada espécie.
  if (!animal) {
    return data.species.reduce((specieObj, specie) => {
      const specieObjCopy = specieObj;
      specieObjCopy[specie.name] = specie.residents.length;
      return specieObjCopy;
    }, {});
  }

  // { specie: 'penguins' } recebendo como parâmetro um objeto com a chave 'specie', retorna um número, a quantidade de animais daquela espécie - retornar a quantidade de animais da especie - specie.residents.lenght
  const verifySpecie = data.species.find((specie) => animal.specie === specie.name);

  if (animal.sex) {
    return verifySpecie.residents.filter((specie) => specie.sex === animal.sex).length;
  }

  return verifySpecie.residents.length;
}

module.exports = countAnimals;
