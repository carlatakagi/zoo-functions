const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
/* const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];
 */
function isManager(id) {
  // seu código aqui -- encontrar UMA pessoa colaboradora gerente e retornar true, caso contratrio retornar false
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const isManagerId = isManager(managerId);

  if (isManagerId === true) {
    return data.employees.reduce((accumulator, employee) => {
      if (employee.managers.includes(managerId)) {
        accumulator.push(`${employee.firstName} ${employee.lastName}`);
      }
      return accumulator;
    }, []);
  }
  if (isManagerId === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

console.log(getRelatedEmployees(stephanieId));
// console.log(getRelatedEmployees(managers));

module.exports = { isManager, getRelatedEmployees };
