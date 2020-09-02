'use strict';

const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', 'Число');
const lastMovie = prompt('Какой последний фильм вы посмотрели ?', 'Название фильма');
const userRaitingMovie = +prompt('Оцените этот фильм от 1 до 10', '1-10');

if (isNaN(numberOfFilms) || isNaN(userRaitingMovie) || !Number.isInteger(numberOfFilms) || userRaitingMovie > 10) {
    document.querySelector('.inst').innerHTML = `Количество фильмов и оценку вводите числом`;
} else {
    personalMovieDB.count = Math.abs(numberOfFilms);
    personalMovieDB.movies = {
        name: lastMovie,
        raiting: Math.abs(userRaitingMovie)
    };
    document.querySelector('.inst').innerHTML = `Количество просмотренных вами фильмов: ${personalMovieDB.count}<br/> 
                                             Название фильма: ${personalMovieDB.movies.name}<br/>
                                             Ваша оценка: ${personalMovieDB.movies.raiting} из 10`;
}

console.log(personalMovieDB);