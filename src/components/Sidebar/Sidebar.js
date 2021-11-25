import { Grommet } from 'grommet';
import { DocumentText, Home, Iteration, Search } from 'grommet-icons';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

import { Box, Button, Heading, Nav } from '../UI/Components';

const theme = {
  button: {
    border: {
      width: '0px',
      radius: '1px',
    },
  },
};

const SidebarButton = ({ label, ...rest }) => (
  <Button {...rest} label={label} />
);

const Sidebar = () => {
  const [active, setActive] = useState();
  const history = useHistory();

  const handleClickRedirectAdd = (item) => {
    if (item === 'Home') {
      history.push('/');
    }

    if (item === 'Search') {
      history.push('/');
    }

    if (item === 'Albums') {
      history.push('/albums');
    }

    if (item === 'Reviews') {
      history.push('/add');
    }
    setActive(item);
  };

  return (
    <Grommet theme={theme}>
      <Box fill direction="row">
        <Nav>
          <Heading size="small">Review</Heading>
          {[
            {
              label: 'Home',
              icon: <Home />,
              justify: 'center',
            },
            {
              label: 'Search',
              icon: <Search />,
              justify: 'center',
            },
            { label: 'Albums', icon: <Iteration />, justify: 'center' },
            {
              label: 'Reviews',
              icon: <DocumentText />,
              justify: 'center',
            },
          ].map((item) => (
            <SidebarButton
              key={item.label}
              label={item.label}
              active={item.label === active}
              onClick={() => handleClickRedirectAdd(item.label)}
              icon={item.icon}
              justify={item.justify}
            />
          ))}
        </Nav>
      </Box>
    </Grommet>
  );
};

export default Sidebar;
