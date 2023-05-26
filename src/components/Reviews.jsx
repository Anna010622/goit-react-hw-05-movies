import getMovieReviews from 'api/get-movie-reviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      const data = await getMovieReviews(movieId);
      setReviews(data.results);
    };
    getReviews();
  }, [movieId]);

  return reviews.length !== 0 ? (
    <ul>
      {reviews.map(review => (
        <li key={review.author}>
          <h3>{`Author: ${review.author}`}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    `We don't have any reviews for this movie`
  );
};

export default Reviews;
