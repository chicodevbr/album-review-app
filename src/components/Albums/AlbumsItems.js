import { Card, Text, Image, CardBody } from '../UI/Components';
import React from 'react';
import { useNavigate } from 'react-router';

const AlbumsItems = (props) => {
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/albums/${props.id}`);
  };

  return (
    <Card onClick={clickHandler}>
      <Image src={props.image} />
      <CardBody pad="small">
        <Text size="medium">{props.name}</Text>
        <Text size="small">{props.artist}</Text>
      </CardBody>
    </Card>
  );
};

export default AlbumsItems;
