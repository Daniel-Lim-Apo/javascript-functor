class Box {
  constructor(value) {
    this.value = value;
  }

  // Functor's map method
  map(fn) {
    return new Box(fn(this.value));
  }
}

// Usage
const box = new Box(10);
const newBox = box.map((x) => x * 2);

console.log(newBox.value);
