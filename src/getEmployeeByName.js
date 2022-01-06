const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }

  return data.employees.find((employee) => {
    const employeeFirstName = employee.firstName;
    const employeeLastName = employee.lastName;
    return employeeFirstName === employeeName || employeeLastName === employeeName;
  });
}

module.exports = getEmployeeByName;
