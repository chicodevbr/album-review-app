import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import AddAlbum from './components/AddAlbum/AddAlbum';
import AllAlbums from './Pages/AllAlbums';
import Album from './Pages/Album';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ReviewDetail from './Pages/ReviewDetail';
import AddReview from './components/AddReview/AddReview';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/albums" element={<AllAlbums />} />

        <Route path="/album/add" element={<AddAlbum />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/review/add/:albumId" element={<AddReview />} />

        <Route path="/albums/:albumId" element={<Album />} />

        <Route path="/review/:reviewId" element={<ReviewDetail />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
