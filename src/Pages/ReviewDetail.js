import { Box } from 'grommet';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeaderBar } from '../components/Header/Header';
import ReviewDetailList from '../components/ReviewDetails/ReviewDetailList';
import { SimpleSpinner } from '../components/UI/Spinner';
import { getRequest } from '../fetch';
import url from '../fetch/urls';
import DefaultPage from '../templates/DefaultPage';

const ReviewDetail = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { reviewId } = useParams();

  const fetchReviewHandler = useCallback(async () => {
    console.log(reviewId);
    setIsLoading(true);
    setError(null);

    try {
      const response = await getRequest(`${url.reviews}${reviewId}`);
      const data = response.data;

      setReview(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [reviewId]);

  useEffect(() => {
    fetchReviewHandler();
  }, [fetchReviewHandler]);

  if (isLoading) {
    return (
      <Box>
        <HeaderBar />
        <SimpleSpinner />
      </Box>
    );
  }

  if (error) {
    return (
      <DefaultPage>
        <p>{error}</p>
      </DefaultPage>
    );
  }

  return (
    <Box>
      <HeaderBar />
      <ReviewDetailList items={review} />
    </Box>
  );
};

export default ReviewDetail;
