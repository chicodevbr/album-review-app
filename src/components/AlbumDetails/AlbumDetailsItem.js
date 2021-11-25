import React from 'react';
import { Box, Heading } from '../UI/Components';

const AlbumDetailsItem = (props) => {
  return (
    <Box>
      <Heading>{props.title}</Heading>
    </Box>
  );
};

export default AlbumDetailsItem;
