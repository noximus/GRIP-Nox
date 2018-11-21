import React from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';

const Navigation = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', marginLeft: '100px'}}>
      <Logo />
      <Search />
    </nav>
  );
}

export default Navigation;