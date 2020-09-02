'use strict';

let i = true;

let personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

while (i) {

    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', 'Число');

    if (isNaN(numberOfFilms)) {
        alert('Только числа');
    } else {
        personalMovieDB.count = numberOfFilms;
        i = false;
        
        document.querySelector('.inst').innerHTML = `Количество просмотренных вами фильмов: ${personalMovieDB.count}`;
    }
}

i = true;

while (i) {
    const lastMovie = prompt('Какой последний фильм вы посмотрели ?', 'Название фильма');
    const userRaitingMovie = prompt('Оцените этот фильм от 1 до 10', '1-10');


    if (isNaN(userRaitingMovie)) {
        alert('В оценке только числа');
    } else {
        i = false;
        personalMovieDB.movies = {
            name: lastMovie,
            raiting: userRaitingMovie
        };

    }
}

console.log(personalMovieDB);