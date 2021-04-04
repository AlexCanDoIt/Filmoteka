import './sass/main.scss';
import refs from './js/refs.js';
import movieApi from './js/movie.js';
import genresApi from './js/genres.js';
import movieCardTpl from './templates/movieCard.hbs';
import movieAdapter from './js/adapters.js';
import listPop from './pop';

listPop();

movieApi.fetchPopular().then(({ results }) => {
  const movieDataList = results.map(item => movieAdapter(item));
  const movieList = movieDataList.map(item => movieCardTpl(item)).join('');

  refs.movieList.innerHTML = movieList;
  // console.log(movieList);
});

genresApi.fetchGenres().then(({ genres }) => {
  console.log(genres);
});
