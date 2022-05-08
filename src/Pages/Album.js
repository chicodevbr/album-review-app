import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getRequest } from '../fetch';
import url from '../fetch/urls';
import AlbumDetailsList from '../components/AlbumDetails/AlbumDetailsList';

import { SimpleSpinner } from '../components/UI/Spinner';
import DefaultPage from '../templates/DefaultPage';
import ReviewsList from '../components/Reviews/ReviewsList';

const Album = () => {
  const [album, setAlbum] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { albumId } = useParams();

  const fetchAlbumsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await getRequest(`${url.albums}${albumId}`);

      const data = response.data;

      setAlbum(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [albumId]);

  const fetchReviewsHandler = useCallback(async () => {
    try {
      const response = await getRequest(`${url.reviews}album/${albumId}`);

      const data = response.data;
      setReviews(data);
    } catch (error) {
      setError(error.message);
    }
  }, [albumId]);

  useEffect(() => {
    fetchAlbumsHandler();
    fetchReviewsHandler();
  }, [fetchAlbumsHandler, fetchReviewsHandler]);
  if (isLoading) {
    return (
      <DefaultPage>
        <SimpleSpinner />
      </DefaultPage>
    );
  }

  if (error) {
    return (
      <DefaultPage>
        <p>{error}</p>
      </DefaultPage>
    );
  }

  return (
    <DefaultPage>
      <AlbumDetailsList items={album} />

      <ReviewsList items={reviews} albumId={albumId} />
    </DefaultPage>
  );
};

export default Album;
