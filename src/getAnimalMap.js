const data = require('../data/zoo_data');

function getAnimalMap(options) {
  /* const { sex } = options || {};

  return data.species.reduce((speciesObj, specie) => {
    const speciesObjCopy = speciesObj;

    if (sex) {
      console.log(sex);
    }

    if (!speciesObjCopy[specie.location]) {
      speciesObjCopy[specie.location] = [specie.name];
    } else {
      speciesObjCopy[specie.location].push(specie.name);
    }

    return speciesObjCopy;
  }, {}); */
}

console.log(getAnimalMap({ sex: 'female' }));
/* const expected = {
  NE: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
  ],
  location : [name, name]
    NE: ['lions', 'giraffes'],
    NW: ['tigers', 'bears', 'elephants'],
    SE: ['penguins', 'otters'],
    SW: ['frogs', 'snakes'],
  };
*/

module.exports = getAnimalMap;
