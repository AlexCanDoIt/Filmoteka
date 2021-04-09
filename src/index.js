import './sass/main.scss';
import refs from './js/refs.js';
import movieApi from './js/movie.js';
import MoviePagination from './js/movie-pagination.js';
const debounce = require('lodash.debounce');

const movies = new MoviePagination('.movies__list');

// const prevButtonRef = document.querySelector('.button--prev');
// const nextButtonRef = document.querySelector('.button--next');
// prevButtonRef.addEventListener('click', movies.goToPrevPage);
// nextButtonRef.addEventListener('click', movies.goToNextPage);

// refs.pagination.addEventListener('click', getPage);

// function getPage() {
//   const page = Number(document.querySelector('.active').innerText);
//   movies.goToPage(page);
// }

if (!movies.keyword) movies.mount();

refs.input.addEventListener(
  'input',
  debounce(({ target: { value } }) => {
    movies.currentPage = 1;
    movies.keyword = value;
    console.log(movies.keyword);
    if (!movies.keyword) movies.mount();
    if (movies.keyword) movies.mount();
  }, 1000),
);

refs.pagination.addEventListener('click', getPage);

function getPage() {
  movies.currentPage = Number(document.querySelector('.active').innerText);
  movies.goToPage();
}
