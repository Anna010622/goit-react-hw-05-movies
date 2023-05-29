import axios from 'axios';

const searchMovies = async (query, page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?${query}&api_key=d4182ef1b885bf3cba37062e5c58a7c6&include_adult=false&language=en-US&page=${page}`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default searchMovies;
