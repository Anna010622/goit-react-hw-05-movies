import { PropTypes } from 'prop-types';
import { Tooltip } from 'react-tooltip';
import defaultMovieImg from '../../images/default-movie-img.jpg';

const TooltipHover = ({ img, id }) => {
  return (
    <Tooltip anchorSelect={`#tooltip${id}`} place="right">
      <div>
        <img
          src={img ? `https://image.tmdb.org/t/p/w500${img}` : defaultMovieImg}
          alt="movie poster"
          width={150}
          height={225}
        />
      </div>
    </Tooltip>
  );
};

TooltipHover.propTypes = {
  img: PropTypes.string,
  id: PropTypes.number,
};

export default TooltipHover;
