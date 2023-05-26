import axios from 'axios';

const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=d4182ef1b885bf3cba37062e5c58a7c6`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getMovieDetails;
