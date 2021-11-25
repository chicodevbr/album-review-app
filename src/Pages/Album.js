import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../api';
import DefaultPage from '../templates/DefaultPage';

const AlbumDetails = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    getDataById(albumId);
  }, [albumId]);

  const getDataById = (id) => {
    api
      .get(`https://api-album-review.herokuapp.com/albums/${id}`)
      .then((response) => {
        setAlbum(response.data);
      });
  };

  return (
    <DefaultPage>
      <h1>details</h1>
    </DefaultPage>
  );
};

export default AlbumDetails;
