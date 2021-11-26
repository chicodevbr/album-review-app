import React from 'react';
import { Box, Heading, Image, Main, Text } from '../UI/Components';

const AlbumDetailsItem = (props) => {
  return (
    <Box align="start">
      <Heading>{props.name}</Heading>
      <Main direction="row">
        <Box height="small" width="small">
          <Image src={props.image} atl={props.name} fit="cover" />
        </Box>
        <Box direction="column" pad="small">
          <Text size={'2xl'}>{props.artist}</Text>
          <Text size={'medium'}>Release: {props.year}</Text>
          <Text size={'medium'}>Producer: {props.producer}</Text>
        </Box>
      </Main>
    </Box>
  );
};

export default AlbumDetailsItem;
