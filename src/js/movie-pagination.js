import movieCardTpl from '../templates/movieCard.hbs';
import movieApi from './movie';
import { generatePosterPath, convertGenre } from './helpers';

class MoviePagination {
  #movies = [];

  constructor(selector) {
    this.element = document.querySelector(selector);
    this.#movies = [];
    this.currentPage = 1;
    this.totalPages = 0;
    this.goToPrevPage = this.goToPrevPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.keyword = '';
  }

  get movies() {
    return this.#movies;
  }

  set movies(movieList) {
    if (!movieList) {
      console.error('Где список фильмов?');
    }

    this.#movies = movieList;
    this.render();
  }

  goToPrevPage() {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage -= 1;
    this.fetchMovies().then(({ results }) => {
      this.movies = this.convertMoviesData(results);
    });
  }

  goToNextPage() {
    if (this.currentPage === this.totalPages) {
      return;
    }

    this.currentPage += 1;
    this.fetchMovies().then(({ results }) => {
      this.movies = this.convertMoviesData(results);
    });
  }

  loadMore() {
    this.currentPage += 1;
    return this.fetchMovies().then(({ results }) => {
      this.addMovies(this.convertMoviesData(results));
    });
  }

  addMovies(newMovies) {
    this.movies = [...this.movies, ...newMovies];
  }

  convertMoviesData(movieList) {
    return movieList.map(movie => movieAdapter(movie));
  }

  fetchMovies() {
    if (!this.keyword) {
      return movieApi
        .fetchPopular(this.currentPage)
        .then(({ results, total_pages }) => ({ results, total_pages }));
    }

    if (this.keyword) {
      return movieApi
        .fetchByKeyword(this.currentPage, this.keyword)
        .then(({ results, total_pages }) => ({ results, total_pages }));
    }
  }

  mount() {
    this.fetchMovies().then(({ results, total_pages }) => {
      this.movies = this.convertMoviesData(results);
      this.totalPages = total_pages;
    });
  }

  render() {
    this.element.innerHTML = movieCardTpl(this.movies);
  }
}

const movieAdapter = ({
  id,
  poster_path,
  genre_ids,
  original_title,
  overview,
  popularity,
  release_date,
  title,
  vote_avarage,
  vote_count,
}) => ({
  id: id,
  imgSrc: generatePosterPath(poster_path),
  title: title,
  genre: convertGenre(genre_ids),
  releaseYear: release_date.slice(0, 4),
  rating: vote_avarage,
});

export default MoviePagination;
