import { Home } from 'grommet-icons';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AddAlbum from '../components/AddAlbum/AddAlbum';
import Album from '../Pages/Album';
import AllAlbums from '../Pages/AllAlbums';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/album/:albumId" component={Album} />
        <Route path="/albums" component={AllAlbums} />
        <Route path="/add" component={AddAlbum} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
