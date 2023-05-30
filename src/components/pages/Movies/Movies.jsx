import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import searchMovies from 'api/search-movies';
import MovieList from 'components/MovieList/MovieList';
import PaginationRanges from 'components/Pagination/Pagination';
import { Icon, Input, InputWrapper, MoviesWrapper } from './Movies.styled';
import { ToastContainer, toast } from 'react-toastify';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getSearchMovies = async () => {
      if (searchParams.get('query')) {
        const data = await searchMovies(searchParams, searchParams.get('page'));

        if (data.results.length === 0) {
          toast.warn('Nothing was found for this query', {
            autoClose: 3000,
          });
        }
        setMovies(data.results);
        setTotalPages(data.total_pages);
      }
    };
    getSearchMovies();
  }, [searchParams]);

  const handleInputChange = event => {
    setSearchParams(
      event.target.value !== '' ? { query: event.target.value, page: 1 } : {}
    );
  };

  const setPage = value => {
    setSearchParams({
      query: `${searchParams.get('query')}`,
      page: value,
    });
  };
  return (
    <MoviesWrapper>
      <InputWrapper>
        <Input
          minLength={2}
          debounceTimeout={500}
          value={searchParams.get('query') ?? ''}
          onChange={handleInputChange}
        />
        <Icon />
      </InputWrapper>

      <MovieList movies={movies} />

      {movies.length > 0 && (
        <PaginationRanges
          totalPages={totalPages}
          onButtonClick={setPage}
          page={Number(searchParams.get('page'))}
        />
      )}

      <ToastContainer />
    </MoviesWrapper>
  );
};

export default Movies;
