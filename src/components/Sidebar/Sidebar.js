import { Grommet } from 'grommet';
import { DocumentText, Home, Search } from 'grommet-icons';
import React from 'react';
import { useState } from 'react';
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
  return (
    <Grommet theme={theme}>
      <Box fill direction="row">
        <Nav>
          <Heading size="small">Review</Heading>
          {[
            { label: 'Home', icon: <Home />, justify: 'center' },
            { label: 'Search', icon: <Search />, justify: 'center' },
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
              onClick={() => setActive(item.label)}
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
