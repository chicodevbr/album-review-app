import ReviewDetailItem from './ReviewDetailitem';

const ReviewDetailList = (props) => {
  const { items } = props;

  return (
    <ReviewDetailItem
      key={items._id}
      title={items.title}
      author={items.author}
      post={items.post}
      likes={items.likes}
    />
  );
};

export default ReviewDetailList;
