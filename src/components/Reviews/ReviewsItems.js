import { Text } from '../UI/Components';
import React from 'react';
import { useNavigate } from 'react-router';
import { Box, Heading } from 'grommet';

const ReviewsItems = (props) => {
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/review/${props.id}`);
  };

  return (
    <Box onClick={clickHandler}>
      <Heading size="x-small">{props.title}</Heading>
      <Text size="small">{props.author}</Text>
      <Text size="large">{props.post}</Text>
    </Box>
  );
};

export default ReviewsItems;
