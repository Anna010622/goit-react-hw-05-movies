import getMovieDetails from 'api/get-movie-details';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state ?? '/');
  console.log('location in details', location);
  console.log('backLink', backLink);

  useEffect(() => {
    const getDetails = async () => {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    };
    getDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink.current}>Go back</Link>
      <div>
        <div>
          <img
            src={
              movie?.poster_path &&
              `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }
            alt="movie poster"
            width={250}
          />
        </div>
        <div>
          <h1>{movie?.title}</h1>
          <p>User Score: {Math.round(movie?.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie?.overview}</p>
          <h2>Genres</h2>
          {/* <p>{movie?.genres.map(genre => genre.name).join(', ')}</p> */}
          <ul>
            {movie?.genres.map(genre => (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>loading..</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
