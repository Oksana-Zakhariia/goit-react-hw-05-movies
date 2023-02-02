import axios from 'axios';

const API_KEY = 'c65b1581ed69fd3b6701ed620730aaec';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const fetchMoviesByName = async (
  endpoints = `search/movie`,
  name = 'fox'
) => {
  const response = await axios.get(
    `${endpoints}?api_key=${API_KEY}&query=${name} `
  );
  return response.data;
};
