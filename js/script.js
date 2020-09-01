'use strict';

let i = true;

while (i) {

    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', 'Число');

    if (isNaN(numberOfFilms)) {
        alert('Только числа');
    } else {
        i = false;
        document.querySelector('.inst').innerHTML = `Количество просмотренных вами фильмов: ${numberOfFilms}`;
    }
}