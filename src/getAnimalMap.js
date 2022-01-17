const data = require('../data/zoo_data');
// minha irmã me ajudou
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
function getResidentsNames({ residents, sex, sorted }) {
  return residents.reduce((accumulator, currentSpecie) => {
    // parenteses para separar o que tem que fazer primeiro
    if ((sex && sex === currentSpecie.sex) || !sex) {
      accumulator.push(currentSpecie.name);
    }
    if (sorted) {
      accumulator.sort();
    }
    return accumulator;
  }, []);
}

// funcao para para nome dos animais em um array
// params => { sex, sorted }
// named parameters utiliza para organizar parametros, normalmente utilizado a partir de três parametros
function getAllAnimalsResidentsAndLocations({ sex, sorted }) {
  return data.species.reduce((accumulator, currentSpecie) => {
    const accumulatorCopy = accumulator;
    const keyLocationExist = accumulatorCopy[currentSpecie.location];
    if (keyLocationExist) {
      accumulatorCopy[currentSpecie.location].push({
        [currentSpecie.name]: getResidentsNames({
          residents: currentSpecie.residents, sex, sorted,
        }),
      });
    } else {
      accumulatorCopy[currentSpecie.location] = [{
        [currentSpecie.name]: getResidentsNames({
          residents: currentSpecie.residents, sex, sorted,
        }),
      }];
    }
    return accumulatorCopy;
  }, {});
}

// funcao principal
// default de funcao getAnimalMap(options = {})
function getAnimalMap(options = {}) {
  const { includeNames, sex, sorted } = options;

  if (includeNames) return getAllAnimalsResidentsAndLocations({ sex, sorted });

  return getAllAnimalsAndLocations();
}

// getAllAnimalsResidentsAndLocations(sex, sorted) - standard parameters
// getAllAnimalsResidentsAndLocations({ sorted, sex }) - named parameters /parametros nomeados

module.exports = getAnimalMap;
