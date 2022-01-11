const data = require('../data/zoo_data');

function getLocations(responsibleFor) {
  /* return data.species.filter((specie) => responsibleFor.includes(specie.id))
    .map((specie) => specie.location); */
  return data.species.reduce((listLocation, currentSpecies) => {
    if (responsibleFor.includes(currentSpecies.id)) {
      listLocation.push(currentSpecies.location);
    }
    return listLocation;
  }, []);
}

function getName(responsibleFor) {
  return data.species.reduce((listName, currentSpecies) => {
    if (responsibleFor.includes(currentSpecies.id)) {
      listName.push(currentSpecies.name);
    }
    return listName;
  }, []);
}

function getAll(employees) {
  return data.employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getName(employee.responsibleFor),
    locations: getLocations(employee.responsibleFor),
  }));
}

function getEmployeesCoverage(options) {
  if (!options) {
    return getAll();
  }

  const findEmployee = data.employees.find((employee) => employee.id === options.id
    || employee.firstName === options.name || employee.lastName === options.name);

  if (!findEmployee) throw new Error('Informações inválidas');

  return {
    id: findEmployee.id,
    fullName: `${findEmployee.firstName} ${findEmployee.lastName}`,
    species: getName(findEmployee.responsibleFor),
    locations: getLocations(findEmployee.responsibleFor),
  };
}

module.exports = getEmployeesCoverage;
