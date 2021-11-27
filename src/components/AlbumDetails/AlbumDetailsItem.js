import React from 'react';
import { Box, Heading, Image, Main, Text } from '../UI/Components';

const AlbumDetailsItem = (props) => {
  return (
    <Box align="start">
      <Heading>{props.artist}</Heading>
      <Main direction="row">
        <Box height="small" width="small">
          <Image src={props.image} atl={props.name} fit="cover" />
        </Box>
        <Box direction="column" pad="small">
          <Text size={'2xl'}>{props.name}</Text>
          <Text size={'medium'}>Release: {props.year}</Text>
          <Text size={'medium'}>Producer: {props.producer}</Text>
          <Text size={'medium'}>Label: {props.label}</Text>
        </Box>
      </Main>
    </Box>
  );
};

export default AlbumDetailsItem;
