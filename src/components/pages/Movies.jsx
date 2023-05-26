import searchMovies from 'api/search-movies';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleInputChange = event => {
    setSearchParams(
      event.target.value !== '' ? { query: event.target.value } : {}
    );
  };

  // const getSearchMovies = async () => {
  //   if (searchParams.get('query') !== '') {
  //     const data = await searchMovies(searchParams);
  //     setMovies(data.results);
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   getSearchMovies();
  // };

  useEffect(() => {
    const getSearchMovies = async () => {
      if (searchParams.get('query') !== '') {
        const data = await searchMovies(searchParams);
        setMovies(data.results);
      }
    };

    getSearchMovies();
  }, [searchParams]);

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>*/}
      <form>
        <input
          type="text"
          onChange={handleInputChange}
          value={searchParams.get('query') ?? ''}
        />
        {/* <button type="submit">Search</button> */}
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
