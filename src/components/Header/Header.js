import React from 'react';
import { Header, Anchor } from 'grommet';
import HeaderMenuProfile from './HeaderMenuProfile';

export const HeaderBar = () => {
  return (
    <Header background="dark-2" pad="medium">
      <Anchor href="/" size="xxlarge" label="Album Review" />
      <HeaderMenuProfile />
    </Header>
  );
};
