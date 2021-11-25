import React from 'react';
import { Box, Heading } from '../UI/Components';

const AlbumDetailsItem = (props) => {
  return (
    <Box>
      <Heading>{props.name}</Heading>
    </Box>
  );
};

export default AlbumDetailsItem;
