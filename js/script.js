'use strict';

const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

let numberOfFilms;
let lastMovie;
let userRaitingMovie;

while (true) {
    numberOfFilms = Math.abs(+prompt('Сколько фильмов вы уже посмотрели ?', ''));
    if (numberOfFilms === 0 || isNaN(numberOfFilms)) {
        console.log('Ошибочка');
    } else {
        break;
    }
}

while (true) {
    lastMovie = prompt('Какой последний фильм вы посмотрели ?', '');
    if (lastMovie === '' || lastMovie === null || lastMovie.length > 50) {
        console.log('Ошибочка');
        console.log(lastMovie);
    } else {
        break;
    }
}

while (true) {
    userRaitingMovie = Math.abs(+prompt('Оцените этот фильм от 1 до 10', ''));
    if (isNaN(userRaitingMovie) || userRaitingMovie === 0 || userRaitingMovie > 10) {
        console.log('Ошибочка');
    } else {
        break;
    }
}

personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {
    name: lastMovie,
    raiting: userRaitingMovie,
};

document.querySelector('.inst').innerHTML = `Количество просмотренных вами фильмов: ${personalMovieDB.count}<br/> 
                                                 Название фильма: ${personalMovieDB.movies.name}<br/>
                                                 Ваша оценка: ${personalMovieDB.movies.raiting} из 10`;

console.log(personalMovieDB);


if (personalMovieDB.count < 10) {
    alert('Просмотренно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Ошибочка');
}


let createZero = (timer) => {
    let ad = (timer <= 9) ? '0' : '';
    return ad;
};

function Сlock(hour, minutes, second) {
    setInterval(function () {
        second++;
        if (second >= 60) {
            second = 0;
            minutes++;
        } else if (minutes >= 60) {
            minutes = 0;
            hour++;
        } else if (hour >= 24) {
            hour = 0;
        }
        document.querySelector('.timer').innerHTML = `${createZero(hour)+hour}:${createZero(minutes)+minutes}:${createZero(second)+second}`;
    }, 1000);
}

Сlock(0, 0, 0);