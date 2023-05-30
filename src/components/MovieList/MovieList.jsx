import { PropTypes } from 'prop-types';
import { List, Item, MovieLink } from './MovieList.styled';
import TooltipHover from 'components/Tooltip/Tooltip';

const { useLocation } = require('react-router-dom');

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies?.map(movie => (
        <Item key={movie.id}>
          <>
            <MovieLink
              id={`tooltip${movie.id}`}
              to={`/movies/${movie.id}`}
              state={location}
            >
              {movie.title}
            </MovieLink>
            <TooltipHover img={movie.poster_path} id={movie.id} />
          </>
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
