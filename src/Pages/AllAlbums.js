import React, { useCallback, useEffect, useState } from 'react';
import { getRequest } from '../fetch';
import url from '../fetch/urls';
import AlbumsList from '../components/Albums/AlbumsList';
import { SimpleSpinner } from '../components/UI/Spinner';
import DefaultPage from '../templates/DefaultPage';

const AllAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAlbumsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await getRequest(url.albums);

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
      console.log(response);
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

  return <DefaultPage>{content}</DefaultPage>;
};

export default AllAlbums;
