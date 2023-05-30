import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovieCredits from 'api/get-movie-credits';
import { CastList, Image, Info, Item } from './Cast.styled';
import defaultImg from '../../images/default-img.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCredits = async () => {
      const data = await getMovieCredits(movieId);
      setCast(data.cast);
    };
    getCredits();
  }, [movieId]);

  return cast.length > 0 ? (
    <CastList>
      {cast.map(actor => (
        <Item key={actor.id}>
          <Image
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                : defaultImg
            }
            alt={actor.name}
          />
          <Info>
            <h3>{actor.name}</h3>
            <p>{actor.character}</p>
          </Info>
        </Item>
      ))}
    </CastList>
  ) : (
    <p>Sorry, there is no information about cast</p>
  );
};

export default Cast;
