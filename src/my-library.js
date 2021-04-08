import './sass/my-library.scss';
import MoviePagination from './js/movie-pagination.js';

const movies = new MoviePagination('.movies__list');

const prevButtonRef = document.querySelector('.button--prev');
const nextButtonRef = document.querySelector('.button--next');

prevButtonRef.addEventListener('click', movies.goToPrevPage);
nextButtonRef.addEventListener('click', movies.goToNextPage);

movies.mount();
