import { Menu } from 'grommet';
import { useNavigate } from 'react-router';

const HeaderMenuProfile = () => {
  let navigate = useNavigate();

  return (
    <Menu
      label="Account"
      items={[
        {
          label: 'Profile',
          onClick: () => {
            navigate('/profile');
          },
        },
        { label: 'Logout', onClick: () => {} },
        {
          label: 'Login',
          onClick: () => {
            navigate('/login');
          },
        },
        {
          label: 'Signup',
          onClick: () => {
            navigate('/signup');
          },
        },
      ]}
    />
  );
};

export default HeaderMenuProfile;
