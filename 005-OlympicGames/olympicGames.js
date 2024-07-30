// Define the OlympicGamesFunctor class
class OlympicGamesFunctor {
  constructor(games) {
    this.games = games;
  }

  // Implement the map method
  map(fn) {
    return new OlympicGamesFunctor(this.games.map(fn));
  }
}

// Define some Olympic game objects
const olympicGames = [
  { name: "Tokyo 2020", year: 2021, city: "Tokyo" },
  { name: "Rio 2016", year: 2016, city: "Rio de Janeiro" },
  { name: "London 2012", year: 2012, city: "London" },
  { name: "Beijing 2008", year: 2008, city: "Beijing" },
];

// Create an instance of OlympicGamesFunctor
const olympicGamesFunctor = new OlympicGamesFunctor(olympicGames);

// Define a function to transform each game
const transformGame = (game) => ({
  ...game,
  description: `${game.name} was held in ${game.city} in the year ${game.year}.`,
});

// Use the map method to apply the transformation
const transformedGames = olympicGamesFunctor.map(transformGame);

// Log the result
console.log(transformedGames.games);
