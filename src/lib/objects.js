const createPerson = (name, age) => {
  return {
    name,
    age,
  };
};

const getName = object => {
  const { name } = object;
  return name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return !!object[property];
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => {
    return person.age;
  });
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  const ages = people.map(person => person.age);
  const sum = ages.reduce((acc, currentvalue) => {
    return acc + currentvalue;
  }, 0);
  return sum / ages.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce(friend) {
      return `Hi ${friend}, my name is ${this.name} and I am ${this.age}!`;
    },
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
