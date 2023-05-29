import getMovieReviews from 'api/get-movie-reviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsItem, ReviewsList } from './Reviews.styled';

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
    <ReviewsList>
      {reviews.map(review => (
        <ReviewsItem key={review.id}>
          <h3>{`Author: ${review.author}`}</h3>
          <p>{review.content}</p>
        </ReviewsItem>
      ))}
    </ReviewsList>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
