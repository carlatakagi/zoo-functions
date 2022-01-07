const data = require('../data/zoo_data');

// método includes https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
