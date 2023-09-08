/* eslint-disable indent */
"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("сколько фильмов?", "");
    while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("сколько фильмов?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB[privat]);

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLever() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов.");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель.");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман.");
    } else {
        alert("Произошла ошибка.");
    }
}

detectPersonalLever();

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""), 
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);