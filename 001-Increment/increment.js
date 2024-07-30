const numbers = [1, 2, 3, 4, 5];

// Define a function to be applied to each element
const increment = (x) => x + 1;

// Use the map method of the array (functor)
const incrementedNumbers = numbers.map(increment);

console.log(incrementedNumbers);
