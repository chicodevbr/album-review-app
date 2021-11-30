import React from 'react';

import AlbumDetailsItem from './AlbumDetailsItem';

const AlbumDetailsList = (props) => {
  const { items } = props;
  return (
    <AlbumDetailsItem
      key={items._id}
      name={items.name}
      description={items.description}
      image={items.imgUrl}
      artist={items.artist}
      year={items.year}
      label={items.label}
      producer={items.producer}
    />
  );
};

export default AlbumDetailsList;
