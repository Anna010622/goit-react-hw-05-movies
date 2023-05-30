import getMovieDetails from 'api/get-movie-details';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  MovieDetailsContainer,
  DetailsWrapper,
  ImageWrapper,
  Image,
  Details,
  Button,
  InformationLink,
  InformationTitle,
  InformationList,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';
import defaultMovieImg from '../../../images/default-movie-img.jpg';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state ?? '/');

  useEffect(() => {
    const getDetails = async () => {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    };
    getDetails();
  }, [movieId]);

  return (
    <MovieDetailsContainer>
      <Button to={backLink.current}>Go back</Button>

      <DetailsWrapper>
        <ImageWrapper>
          <Image
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultMovieImg
            }
            alt="movie poster"
            width={255}
          />
        </ImageWrapper>
        <Details>
          <h1>{movie?.title}</h1>
          <p>User Score: {Math.round(movie?.vote_average * 10)}%</p>
          <h2>Overview</h2>
          {movie?.overview !== '' ? (
            <p>{movie?.overview}</p>
          ) : (
            <p>There is no overview</p>
          )}

          <h2>Genres</h2>
          {movie?.genres.length > 0 ? (
            <p>{movie?.genres.map(genre => genre.name).join(' / ')}</p>
          ) : (
            <p>Sorry, there is no information about genres</p>
          )}

          {/* <ul>
            {movie?.genres.map(genre => (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            ))}
          </ul> */}
        </Details>
      </DetailsWrapper>
      <div>
        <InformationTitle>Additional information</InformationTitle>
        <InformationList>
          <li>
            <InformationLink to="cast">Cast</InformationLink>
          </li>
          <li>
            <InformationLink to="reviews">Reviews</InformationLink>
          </li>
        </InformationList>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
