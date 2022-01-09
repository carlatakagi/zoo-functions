const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const entradas = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

// const expected = { adult: 2, child: 3, senior: 1 };
function countEntrants(entrants) {
  return entrants.reduce((entrantObj, currentAge) => {
    const copyEntrantObj = entrantObj;
    if (currentAge.age < 18) {
      copyEntrantObj.child += 1; // cria chave e adiciona valor
    } else if (currentAge.age < 50) {
      copyEntrantObj.adult += 1;
    } else {
      copyEntrantObj.senior += 1;
    }

    return copyEntrantObj;
  }, { adult: 0, child: 0, senior: 0 });
}
console.log(countEntrants(entradas));

function calculateEntry(entrants) {
  if (!entrants || !Object.keys(entrants).length) {
    return 0;
  }

  const countedEntrants = countEntrants(entrants);
  const priceChild = prices.child * countedEntrants.child;
  const priceAdult = prices.adult * countedEntrants.adult;
  const priceSenior = prices.senior * countedEntrants.senior;

  return priceChild + priceAdult + priceSenior;
}

console.log(calculateEntry(entradas));

module.exports = { calculateEntry, countEntrants };
