"use strict"
const numberOfFilms = +prompt('Skolko filmov vy uge posmotreli', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Odin iz poslednih prosmotrennyx filmov?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Odin iz poslednih prosmotrennyx filmov?', '');
const d = prompt('На сколько оцените его?', ''); 
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);