import Menu from '../Menu/Menu';
import React from 'react';

const MobileMenu = (props : any) => {

  return (
    <div className={`absolute top-0 w-full ${!props.isOpen ? 'hidden' : ''}`}>
      <Menu />
      <div className="w-full h-[calc(100vh-22rem)] dark:bg-dark-950 opacity-80" />
    </div>
  );
};

export default MobileMenu;