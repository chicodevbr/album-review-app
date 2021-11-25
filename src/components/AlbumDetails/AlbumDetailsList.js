import React from 'react';
import AlbumDetails from '../../Pages/Album';
import DefaultPage from '../../templates/DefaultPage';
import { Card } from '../UI/Components';

const AlbumDetailsList = (props) => {
  const { items } = props;
  if (props.length === 0) {
    return <Card>No details yet</Card>;
  }

  return (
    <DefaultPage>
      <AlbumDetails
        key={items.id}
        id={items.id}
        image={items.imgUrl}
        title={items.name}
        artist={items.artist}
        year={items.year}
        producer={items.producer}
        sales={items.sales}
        streams={items.streams}
      />
    </DefaultPage>
  );
};

export default AlbumDetailsList;
