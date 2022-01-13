const data = require('../data/zoo_data');

const getDays = Object.keys(data.hours);
const animals = data.species.map((species) => species.name);

// funcao para pegar dias que animal x está disponível
function getDaysAnimalAvailability(animal) {
  return data.species.reduce((listDays, currentSpecie) => {
    if (animal.includes(currentSpecie.name)) {
      listDays.push(...currentSpecie.availability); // splita as coisas
    }
    return listDays;
  }, []);
}

// funcao para pegar animais exibidos em x dia
function getAnimalByDay(day) {
  return data.species.reduce((listAnimals, currentAnimal) => {
    if (currentAnimal.availability.includes(day)) {
      listAnimals.push(currentAnimal.name);
    }
    return listAnimals;
  }, []);
}

// funcao para pegar dia e horario
function getScheduleDay(day) {
  if (day === 'Monday') {
    return {
      [day]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  if (day !== 'Monday') {
    return {
      [day]: {
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
        exhibition: getAnimalByDay(day),
      },
    };
  }
}

// funcao para pegar todos os horarios
// minha irmã me ajudou com o spread operator
// ...listAllDays faz a cópia do objeto e mantém que já existe
// ...getScheduleDay(day) para nao achar que a funcao é o nome da chave
function getAll() {
  const getAllDays = getDays.reduce((listAllDays, day) => ({
    ...listAllDays,
    ...getScheduleDay(day),
  }), {});
  return getAllDays;
}

// funcao principal
function getSchedule(scheduleTarget) {
  if (getDays.includes(scheduleTarget)) return getScheduleDay(scheduleTarget);

  if (animals.includes(scheduleTarget)) {
    return getDaysAnimalAvailability(scheduleTarget);
  }
  return getAll();
}

module.exports = getSchedule;
