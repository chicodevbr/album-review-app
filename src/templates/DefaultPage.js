import React from 'react';
import { Box, Grid } from '../components/UI/Components';
import Sidebar from '../components/Sidebar/Sidebar';

const DefaultPage = (props) => {
  return (
    <Grid
      rows={['xSmall', 'xSmall']}
      columns={['xSmall', 'large']}
      gap="small"
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'nav', start: [0, 1], end: [0, 1] },
        { name: 'main', start: [1, 1], end: [1, 1] },
      ]}
    >
      <Box gridArea="nav">
        <Sidebar />
      </Box>
      <Box gridArea="main">{props.children}</Box>
    </Grid>
  );
};

export default DefaultPage;
