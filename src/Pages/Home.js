import { Box, Grid } from '../components/UI/Components';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../api';
import AlbumsList from '../components/Albums/AlbumsList';
import { SimpleSpinner } from '../components/UI/Spinner';

const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAlbumsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.get('albums');

      const transformedAlbums = response.data.map((albumData) => {
        return {
          id: albumData._id,
          name: albumData.name,
          artist: albumData.artist,
          year: albumData.year,
          producer: albumData.producer,
          sales: albumData.sales,
          streams: albumData.streams,
          imgUrl: albumData.imgUrl,
        };
      });

      setAlbums(transformedAlbums);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchAlbumsHandler();
  }, [fetchAlbumsHandler]);

  let content = <p>No albums yet</p>;

  if (albums.length > 0) {
    content = <AlbumsList items={albums} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <SimpleSpinner />;
  }

  console.log(albums);
  return (
    <Grid
      rows={['xSmall', 'xSmall']}
      columns={['xSmall', 'xlarge']}
      gap="small"
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'nav', start: [0, 1], end: [0, 1] },
        { name: 'main', start: [1, 1], end: [1, 1] },
      ]}
    >
      <Box gridArea="nav">Sidebar</Box>
      <Box gridArea="main">{content}</Box>
    </Grid>
  );
};

export default Home;
