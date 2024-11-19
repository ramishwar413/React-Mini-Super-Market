import React from 'react';
import Header from './Header';
const Layout = ({ children }) => {
  return (
    <>
        <Header />
        <div className='layoutDiv'>{children}</div>
        
    </>
  );
};

export default Layout;