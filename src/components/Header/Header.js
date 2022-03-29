import React from 'react';
import { Header, Menu, Anchor } from 'grommet';

export const HeaderBar = () => {
  return (
    <Header background="dark-2" pad="medium">
      <Anchor href="/" size="xxlarge" label="Album Review" />
      <Menu label="account" items={[{ label: 'logout' }]} />
    </Header>
  );
};
