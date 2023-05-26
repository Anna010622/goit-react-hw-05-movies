import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovieCredits from 'api/get-movie-credits';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCredits = async () => {
      const data = await getMovieCredits(movieId);
      setCast(data.cast);
    };
    getCredits();
  }, [movieId]);

  return (
    <ul>
      {cast?.map(actor => (
        <li key={actor.id}>
          <img
            src={
              actor.profile_path &&
              `https://image.tmdb.org/t/p/w300${actor.profile_path}`
            }
            alt={actor.name}
            width={150}
          />
          <h3>{actor.name}</h3>
          <p>{actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
