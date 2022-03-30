import React from 'react';
import AlbumsItems from './AlbumsItems';

import { Card, Box, Text } from '../UI/Components';

const AlbumsList = (props) => {
  if (props.length === 0) {
    return (
      <Card>
        <Text>No albums yet.</Text>
      </Card>
    );
  }

  return (
    <Box
      direction="row-responsive"
      justify="start"
      align="center"
      gap="medium"
      wrap="true"
    >
      {props.items.map((album) => {
        return (
          <AlbumsItems
            key={album.id}
            id={album.id}
            image={album.imgUrl}
            name={album.name}
            artist={album.artist}
          />
        );
      })}
    </Box>
  );
};

export default AlbumsList;
