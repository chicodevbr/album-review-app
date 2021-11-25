import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../api';
import AlbumDetailsList from '../components/AlbumDetails/AlbumDetailsList';

import { SimpleSpinner } from '../components/UI/Spinner';
import DefaultPage from '../templates/DefaultPage';

const Album = () => {
  const [album, setAlbum] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { albumId } = useParams();

  const fetchAlbumsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.get(
        `https://api-album-review.herokuapp.com/albums/${albumId}`
      );

      const data = response.data;

      setAlbum(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [albumId]);

  useEffect(() => {
    fetchAlbumsHandler();
  }, [fetchAlbumsHandler]);

  console.log(album);

  let content = <p>No albums yet</p>;

  if (album.length > 0) {
    content = <AlbumDetailsList items={album} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <SimpleSpinner />;
  }

  return (
    <DefaultPage>
      <AlbumDetailsList items={album} />
    </DefaultPage>
  );
};

export default Album;
