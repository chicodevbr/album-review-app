import { Card, Text, Box } from '../UI/Components';
import ReviewsItems from './ReviewsItems';

const ReviewsList = (props) => {
  if (props.length === 0) {
    return (
      <Card>
        <Text>No reviews yet.</Text>
      </Card>
    );
  }

  return (
    <Box gap="large">
      {props.items.map((review) => {
        return (
          <ReviewsItems
            key={review._id}
            id={review._id}
            albumId={props.albumId}
            title={review.title}
            author={review.author}
            post={review.post}
          />
        );
      })}
    </Box>
  );
};

export default ReviewsList;
