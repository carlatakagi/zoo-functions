const data = require('../data/zoo_data');

// funcao para pegar todas as loc e animais
function getAllAnimalsAndLocations() {
  return data.species.reduce((accumulator, currentSpecie) => {
    const accumulatorCopy = accumulator;
    const keyLocationExist = accumulatorCopy[currentSpecie.location];
    if (keyLocationExist) {
      accumulatorCopy[currentSpecie.location].push(currentSpecie.name);
    } else {
      accumulatorCopy[currentSpecie.location] = [currentSpecie.name];
    }
    return accumulatorCopy;
  }, {});
}

// funcao para pegar nomes dos residents
function getResidentsNames(residents, sex) {
  return residents.map((resident) => resident.name);

  // if (sex) return;
}

// { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] }
// funcao para para nome dos animais em um array
function getAllAnimalsResidentsAndLocations() {
  return data.species.reduce((accumulator, currentSpecie) => {
    const accumulatorCopy = accumulator;
    const keyLocationExist = accumulatorCopy[currentSpecie.location];
    if (keyLocationExist) {
      accumulatorCopy[currentSpecie.location].push({
        [currentSpecie.name]: getResidentsNames(currentSpecie.residents),
      });
    } else {
      accumulatorCopy[currentSpecie.location] = [{
        [currentSpecie.name]: getResidentsNames(currentSpecie.residents),
      }];
    }
    return accumulatorCopy;
  }, {});
}

// funcao principal
function getAnimalMap(options) {
  const hasOptionIncludeName = options && options.includeNames;
  if (hasOptionIncludeName) return getAllAnimalsResidentsAndLocations();

  return getAllAnimalsAndLocations();
}

module.exports = getAnimalMap;
