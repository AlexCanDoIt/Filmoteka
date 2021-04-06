import './sass/main.scss';
import refs from './js/refs.js';
import MoviePagination from './js/movie-pagination.js';
import genresApi from './js/genres.js';
const debounce = require('lodash.debounce');

const movies = new MoviePagination('.movies__list');

const prevButtonRef = document.querySelector('.button--prev');
const nextButtonRef = document.querySelector('.button--next');
prevButtonRef.addEventListener('click', movies.goToPrevPage);
nextButtonRef.addEventListener('click', movies.goToNextPage);

movies.mount();

// import g from './js/genres';
// g.fetchGenres().then(console.log);
// g.getGenreById(['28', '12', '878', '10751']);

/*
 * Названия жанров
 */
var genreIds = ['28', '12', '878', '10751'];

genresApi.fetchGenres().then(({ genres }) => {
    let genreNames = [];
    
    genreIds.map((name) => {
        const genre = genres.find(item => item.id === parseInt(name));
        genreNames.push(genre.name);
    });
    
    var genreNamesToString;
    genreNamesToString = genreNames.join(', ');
    console.log(genreNamesToString);
});

/*
 * Поиск по ключевому слову
 */

// import refs from './js/refs.js';
// import movieApi from './js/movie.js';
// import genresApi from './js/genres.js';
// import movieCardTpl from './templates/movieCard.hbs';
// import movieAdapter from './js/adapters.js';

// movieApi.fetchPopular(5).then(({ results }) => {
//   const movieDataList = results.map(item => movieAdapter(item));
//   const movieList = movieDataList.map(item => movieCardTpl(item)).join('');

//   refs.movieList.innerHTML = movieList;
// });

// genresApi.fetchGenres().then(({ genres }) => {
//   console.log(genres);
// });

// ===========================
// import settings from './settings';
// import movieCard from '../templates/movieCard.hbs';
// const listRef = document.querySelector('.movies__list');
// export default function searchMovie(name) {
//   return fetch(`${settings.BASE_URL}/search/movie?api_key=${settings.API_KEY}&query=${name}`)
//     .then(r => {
//       return r.json();
//     })
//     .then(r => {
//       listRef.innerHTML = ' ';
//       const markup = movieCard(r.results);
//       listRef.insertAdjacentHTML('afterbegin', markup);
//     });
// }

// import searchMovie from './js/search-movie';
// const searchRef = document.querySelector('.form__input');
// searchRef, addEventListener('input', onSearch);
// function onSearch(e) {
//   const value = e.target.value;
//   searchMovie(value);
// }
