// Define the AnimalFunctor class
class AnimalFunctor {
  constructor(animals) {
    this.animals = animals;
  }

  // Implement the map method
  map(fn) {
    return new AnimalFunctor(this.animals.map(fn));
  }
}

// Define some animal objects
const animals = [
  { name: "Lion", type: "Wild" },
  { name: "Dog", type: "Domestic" },
  { name: "Eagle", type: "Wild" },
  { name: "Cat", type: "Domestic" },
];

// Create an instance of AnimalFunctor
const animalFunctor = new AnimalFunctor(animals);

// Define a function to transform each animal
const transformAnimal = (animal) => ({
  ...animal,
  description: `${animal.name} is a ${animal.type} animal.`,
});

// Use the map method to apply the transformation
const transformedAnimals = animalFunctor.map(transformAnimal);

// Log the result
console.log(transformedAnimals.animals);
