import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-album-review.herokuapp.com/',
});

export default api;
