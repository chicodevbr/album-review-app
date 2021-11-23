import { Box } from '../components/UI/Components';
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
          id: albumData.id,
          name: albumData.artist,
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
  return <Box>{content}</Box>;
};

export default Home;
