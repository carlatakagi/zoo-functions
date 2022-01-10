const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((employee) => id === employee.id);
  const responsibleFor = findEmployee.responsibleFor[0];
  const findResidents = data.species.find((species) => responsibleFor === species.id).residents;
  console.log(findResidents);
  const findOldestAge = findResidents.reduce((oldestAge, currentAge) => {
    if (oldestAge.age > currentAge.age) {
      return oldestAge;
    }
    return currentAge;
  });
  return Object.values(findOldestAge);
}

// se findSpecie.age === true
console.log(getOldestFromFirstSpecies(stephanieId));
// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

module.exports = getOldestFromFirstSpecies;
