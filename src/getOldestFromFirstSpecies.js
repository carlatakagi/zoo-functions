const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((employee) => id === employee.id);
  const responsibleFor = findEmployee.responsibleFor[0];
  const findResidents = data.species.find((species) => responsibleFor === species.id).residents;
  const findOldestAge = findResidents.reduce((previousResident, currentResident) => {
    if (previousResident.age > currentResident.age) {
      return previousResident;
    }
    return currentResident;
  });
  // retornar valores do objeto https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
  return Object.values(findOldestAge);
}

module.exports = getOldestFromFirstSpecies;
