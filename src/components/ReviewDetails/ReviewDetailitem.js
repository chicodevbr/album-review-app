import { Box, Button, Heading, Paragraph, Text } from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons';

const ReviewDetailItem = (props) => {
  return (
    <Box pad="large">
      <Heading>{props.title}</Heading>
      <Text>By {props.author} </Text>

      <Paragraph fill>{props.post}</Paragraph>
      <Box direction="row">
        <Box pad="small" justify="center" align="center">
          <Button icon={<Favorite color="status-critical" />}></Button>
          <Text size="small">{props.like}</Text>
        </Box>
        <Box pad="small" justify="center" align="center">
          <Button icon={<ShareOption />}></Button>
          <Text size="small">Share</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewDetailItem;
