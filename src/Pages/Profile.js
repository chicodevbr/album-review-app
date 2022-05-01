import { Avatar, Box, Heading, Paragraph } from 'grommet';
import DefaultPage from '../templates/DefaultPage';

const Profile = () => {
  const src =
    'https://images.unsplash.com/photo-1519345997025-14aba50d7e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
  return (
    <DefaultPage>
      <Box>
        <Box gap="small">
          <Avatar size="3xl" src={src} />
          <Heading>Julia Andrews</Heading>
        </Box>
        <Box>
          <Heading level={3} size="small" pad="small">
            About
          </Heading>
          <Paragraph>
            Julia Andrews is Head of Product at YatLabs and is responsible for
            leading several teams.
          </Paragraph>
        </Box>
        <Box>
          <Heading level={3} size="small" pad="small">
            Reviews
          </Heading>
          <Paragraph>List de Reviews</Paragraph>
        </Box>
      </Box>
    </DefaultPage>
  );
};

export default Profile;
