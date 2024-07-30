const fetchData = () => Promise.resolve(42);

const transformData = (x) => x + 1;

fetchData().then(transformData).then(console.log);
