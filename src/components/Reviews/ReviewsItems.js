import { Text } from '../UI/Components';
import React from 'react';
import { useNavigate } from 'react-router';
import { Box, Button } from 'grommet';
import { Add } from 'grommet-icons';

const ReviewsItems = (props) => {
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/review/${props.id}`);
  };

  const clickHandlerAddReview = () => {
    navigate(`/review/add/${props.albumId}`);
  };

  return (
    <Box gap="medium" pad="medium">
      <Box direction="row" align="center">
        <Text size="large">Reviews</Text>
        <Button
          onClick={clickHandlerAddReview}
          icon={<Add color="neutral-1" />}
        ></Button>
      </Box>
      <Box onClick={clickHandler}>
        <Text size="medium">{props.title}</Text>
      </Box>
    </Box>
  );
};

export default ReviewsItems;
