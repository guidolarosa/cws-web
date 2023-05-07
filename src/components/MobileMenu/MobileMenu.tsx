import Link from 'next/link';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Controls from '../HeaderControls/HeaderControls';
import Menu from '../Menu/Menu';
import React from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const MobileMenu = (props : any) => {

  return (
    <div className={`absolute top-0 w-full h-full flex flex-col ${!props.isOpen ? 'hidden' : ''}`}>
      <Menu 
        className="z-10"
        onMenuItemClick={() => {props.setIsOpen(false)}}
      />
      <Controls 
        className="mt-auto h-auto z-10"
        controlStyles="aspect-auto md:aspect-square bg-primary-50 dark:bg-dark-950 h-16 border-t first:border-l-0"
        controls={[
          {
            element: <ThemeSwitcher />
          },
          {
            element: <Link href="" locale="en">EN</Link>
          },
          {
            element: <Link href="" locale="es">ES</Link>
          },
        ]}
      >
      </Controls>
      <div className="absolute top-0 w-full h-full opacity-90 dark:bg-dark-950 bg-primary-50" onClick={() => {props.setIsOpen(false)}}/>
    </div>
  );
};

export default MobileMenu;