const Movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    score: 9.3,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 9.2,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    score: 9,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    score: 9,
  },
  {
    title: "12 Angry Men",
    year: 1957,
    director: "Sidney Lumet",
    duration: "1h 36min",
    genre: ["Crime", "Drama"],
    score: 8.9,
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    score: 8.9,
  },
];
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const Directors = moviesArray.map(function (movie) {
    return movie.director;
  });
  return Directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const Thebest = moviesArray.filter(function (bestmovie) {
    return (bestmovie.genre === "Steven Spielberg") === "Drama";
  });
  return Thebest;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const average = moviesArray.reduce(function (accumulator, element) {
    const newAccumulator = accumulator + element.score;
    return newAccumulator;
  }, 0);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const Dramamovies = moviesArray.filter(function (drama) {
    return drama.genre === "Drama";
  });
  return Dramamovies;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  moviesArrayCopy = [...movies];
  return moviesArrayCopy;
}
moviesArrayCopy.sort((a, b) => {
  if (a.year === b.year) {
    return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
  }
  return a.year - b.year;
});
console.log(moviesArrayCopy);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  moviesArrayCopy = [...movies];
  return moviesArrayCopy;
}
title.sort((a, b) => {
  return a.localeCompare(b, undefined, { sensitivity: "base" });
});

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
