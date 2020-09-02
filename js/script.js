'use strict';

const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const numberOfFilms = Math.abs(+prompt('Сколько фильмов вы уже посмотрели ?', 'Число')),
    lastMovie = prompt('Какой последний фильм вы посмотрели ?', 'Название фильма'),
    userRaitingMovie = Math.abs(+prompt('Оцените этот фильм от 1 до 10', '1-10'));

if (isNaN(numberOfFilms) || isNaN(userRaitingMovie) || !Number.isInteger(numberOfFilms) || userRaitingMovie > 10) {
    document.querySelector('.inst').innerHTML = `Ошибочка`;
} else {
    personalMovieDB.count = numberOfFilms;
    personalMovieDB.movies = {
        name: lastMovie,
        raiting: userRaitingMovie,
    };
    personalMovieDB.movies[lastMovie] = userRaitingMovie;
    document.querySelector('.inst').innerHTML = `Количество просмотренных вами фильмов: ${personalMovieDB.count}<br/> 
                                                 Название фильма: ${personalMovieDB.movies.name}<br/>
                                                 Ваша оценка: ${personalMovieDB.movies.raiting} из 10`;
}

console.log(personalMovieDB);

let second = 0,
    minutes = 0,
    hour = 0;

function Timer() {
    let time = setInterval(function () {
        second++;
        if (second > 60) {
            second = 0;
            minutes++;
        } else if (minutes > 60) {
            minutes = 0;
            hour++;
        } else if (hour > 24) {
            hour = 0;
        }
        document.querySelector('.timer').innerHTML = `${hour}:${minutes}:${second}`;
    }, 1000);
}

Timer();