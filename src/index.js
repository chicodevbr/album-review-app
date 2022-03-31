import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import AddAlbum from './components/AddAlbum/AddAlbum';
import AllAlbums from './Pages/AllAlbums';
import Album from './Pages/Album';
import Signup from './Pages/Signup';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/albums" element={<AllAlbums />} />

      <Route path="/add" element={<AddAlbum />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/albums/:albumId" element={<Album />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
