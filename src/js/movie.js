import setting from './settings.js';

const { BASE_URL, API_KEY } = setting;

const api = {
  fetchPopular() {
    return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`).then(rawData => rawData.json());
  },
};

export default api;
