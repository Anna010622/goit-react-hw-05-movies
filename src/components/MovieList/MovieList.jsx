import { PropTypes } from 'prop-types';
import { List, Item, MovieLink } from './MovieList.styled';

const { useLocation } = require('react-router-dom');

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies?.map(movie => (
        <Item key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={location}>
            {movie.title}
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieList;
