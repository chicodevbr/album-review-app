import { Box, Heading, Paragraph, Text } from 'grommet';

import SocialPostBar from '../Shared/SocialPostBar';

const ReviewDetailItem = (props) => {
  return (
    <Box pad="large">
      <Heading>{props.title}</Heading>
      <Text>By {props.author} </Text>

      <Paragraph fill>{props.post}</Paragraph>
      <SocialPostBar likes={props.likes} />
    </Box>
  );
};

export default ReviewDetailItem;
