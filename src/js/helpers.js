import settings from './settings.js';
const { POSTER_URL } = settings;

export const generatePosterPath = imageName => `${POSTER_URL}${imageName}`;
