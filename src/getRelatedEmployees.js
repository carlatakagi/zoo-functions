const data = require('../data/zoo_data');

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

module.exports = { isManager, getRelatedEmployees };
