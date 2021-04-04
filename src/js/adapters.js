import { generatePosterPath } from './helpers.js';

export default ({
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
  genre: genre_ids,
  releaseYear: release_date,
  rating: vote_avarage,
});
