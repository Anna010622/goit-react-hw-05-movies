import { Link, useLocation } from 'react-router-dom';
import getTrending from 'api/get-trending';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  console.log('location home', location);

  useEffect(() => {
    const getTrendingList = async () => {
      const data = await getTrending();
      const trendingList = data.results;
      setMovies(trendingList);
    };
    getTrendingList();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
