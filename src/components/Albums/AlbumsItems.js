import { Card, Text, Image, CardBody } from '../UI/Components';
import React from 'react';

const AlbumsItems = (props) => {
  return (
    <Card>
      <Image src={props.image} />
      <CardBody pad="small">
        <Text size="medium">{props.name}</Text>
        <Text size="small">{props.artist}</Text>
      </CardBody>
    </Card>
  );
};

export default AlbumsItems;
