/* eslint-disable indent */
const numberOfFilms = +prompt("сколько фильмов?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false
};

const questions = ["Один из последних просмотренных фильмов?", "На сколько оцените его?", "Один из последних просмотренных фильмов?", 
                    "На сколько оцените его?"];

let answers = [];

for (let i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?", ""), 
        b = prompt("На сколько оцените его?", "");
    if (a !=null && b !=null && a != "" && b != "" && a.length < 50)  {
        personalMovieDB.movies[a] = b;
        alert("done");
    } else {
        alert("You can't use empty movie name or more than 50 charachters, please try again.");
        i--;
    }
    personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов.");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель.");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман.");
} else {
    alert("Произошла ошибка.");
}

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""), 
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);