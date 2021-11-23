import React from 'react';

import { Box, Spinner, Text } from './Components';

export const SimpleSpinner = () => (
  <Box align="center" direction="row" gap="small" pad="small">
    <Spinner />
    <Text>Loading...</Text>
  </Box>
);
