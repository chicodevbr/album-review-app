import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import AddAlbum from './components/AddAlbum/AddAlbum';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />
      <Route path="/add" element={<AddAlbum />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
