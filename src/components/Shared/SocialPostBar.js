import { Box, Button, Text } from 'grommet';
import { Favorite, FormEdit, ShareOption } from 'grommet-icons';

const SocialPostBar = (props) => {
  return (
    <Box direction="row">
      <Box pad="small" justify="center" align="center">
        <Button icon={<Favorite color="status-critical" />}></Button>
        <Text size="small">{props.likes}</Text>
      </Box>
      <Box pad="small" justify="center" align="center">
        <Button icon={<ShareOption />}></Button>
        <Text size="small">Share</Text>
      </Box>
      <Box pad="small" justify="center" align="center">
        <Button icon={<FormEdit />}></Button>
        <Text size="small">Edit</Text>
      </Box>
    </Box>
  );
};

export default SocialPostBar;
