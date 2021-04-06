import setting from './settings.js';

const { BASE_URL, API_KEY } = setting;

const api = {
  fetchPopular(page = '') {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

    return fetch(url).then(rawData => rawData.json());
  },

  fetchByKeyword(page = '', keyword) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${keyword}`;

    return fetch(url).then(rawData => rawData.json());
  },
};

export default api;

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
