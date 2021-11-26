import React from 'react';
import { Box } from '../UI/Components';
import AlbumDetailsItem from './AlbumDetailsItem';

const AlbumDetailsList = (props) => {
  const { items } = props;
  return (
    <Box>
      <AlbumDetailsItem
        key={items._id}
        name={items.name}
        image={items.imgUrl}
      />
    </Box>
  );
};

export default AlbumDetailsList;
