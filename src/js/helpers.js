import settings from './settings.js';
import genresData from './genreData.js';
const { POSTER_URL } = settings;

export const generatePosterPath = imageName => `${POSTER_URL}${imageName}`;

export const convertGenre = ids => {
  let genreNames = [];

  ids.forEach(id => {
    const genre = genresData.find(item => item.id === parseInt(id));
    genreNames.push(genre.name);
  });

  return genreNames.join(', ');
};
