import './sass/main.scss';
import MoviePagination from './js/movie-pagination.js';

const movies = new MoviePagination('.movies__list');

const prevButtonRef = document.querySelector('.button--prev');
const nextButtonRef = document.querySelector('.button--next');

prevButtonRef.addEventListener('click', movies.goToPrevPage);
nextButtonRef.addEventListener('click', movies.goToNextPage);

movies.mount();

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
