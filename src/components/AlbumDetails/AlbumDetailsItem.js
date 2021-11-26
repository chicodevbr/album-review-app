import React from 'react';
import { Box, Heading, Image } from '../UI/Components';

const AlbumDetailsItem = (props) => {
  return (
    <Box>
      <Heading>{props.name}</Heading>
      <Image src={props.image} atl={props.name} />
    </Box>
  );
};

export default AlbumDetailsItem;
