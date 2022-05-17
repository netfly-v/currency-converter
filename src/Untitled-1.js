const factorial = num => (num > 0 ? num * factorial(num - 1) : 1);

factorial(4);

const abcd = {
  name: 'vasya',
  getName() {
    return this.name;
  },
};

console.log(abcd.getName());

const newArr = [1, 2, 3, 4];

const sum = newArr.reduce((acc, el) => acc + el, 0);

const prom = ccc => {
  return {
    then: () => {},
  };
};
prom().then();
