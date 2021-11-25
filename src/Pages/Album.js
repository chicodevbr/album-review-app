import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import AlbumDetailsList from '../components/AlbumDetails/AlbumDetailsList';
import { SimpleSpinner } from '../components/UI/Spinner';

const Album = () => {
  const [album, setAlbum] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    getDataById(albumId);
  }, [albumId]);

  const getDataById = (id) => {
    api
      .get(`https://api-album-review.herokuapp.com/albums/${id}`)
      .then((response) => {
        setAlbum(response.data);
      })
      .catch((error) => console.log(error.message));
  };

  return <AlbumDetailsList items={album} />;
};

export default Album;
