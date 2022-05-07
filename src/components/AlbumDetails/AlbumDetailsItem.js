import React from 'react';

import { Box, Heading, Image, Paragraph, Text } from '../UI/Components';

const AlbumDetailsItem = (props) => {
  return (
    <Box>
      <Box>
        <Heading>{props.name}</Heading>
        <Box direction="row">
          <Box height="medium" width="medium" pad="small">
            <Image src={props.image} atl={props.name} fit="cover" />
          </Box>
          <Box width="large">
            <Paragraph>{props.description}</Paragraph>
            <Box pad="small">
              {/* <Text size={'large'}>{props.artist}</Text> */}
              <Text size={'medium'}>Release: {props.year}</Text>
              <Text size={'medium'}>Producer: {props.producer}</Text>
              <Text size={'medium'}>Label: {props.label}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AlbumDetailsItem;
