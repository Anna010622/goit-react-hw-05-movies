import getTrending from 'api/get-trending';
import { useEffect, useState } from 'react';

import MovieList from 'components/MovieList/MovieList';
import { HomeWrapper, Title } from './Home.styled';
import PaginationRanges from 'components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  useEffect(() => {
    const getTrendingList = async () => {
      const data = await getTrending(searchParams.get('page'));
      const trendingList = data.results;
      setTotalPages(data.total_pages);
      setMovies(trendingList);
    };
    getTrendingList();
  }, [searchParams]);

  const setCurrentPage = value => {
    setSearchParams({
      page: value,
    });
  };
  return (
    <HomeWrapper>
      <Title>Trending today</Title>
      <MovieList movies={movies} />

      {totalPages && (
        <PaginationRanges
          totalPages={totalPages}
          onButtonClick={setCurrentPage}
          page={Number(searchParams.get('page'))}
        />
      )}
    </HomeWrapper>
  );
};

export default Home;
