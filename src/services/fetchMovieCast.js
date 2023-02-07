import axios from 'axios';
const API_KEY = 'c65b1581ed69fd3b6701ed620730aaec';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const fetchMovieCast = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};
