import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Controls from "../Controls/Controls";
import Menu from "../Menu/Menu";
import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const MobileMenu = (props: any) => {
  return (
    <div
      className={`absolute top-0 w-full h-full flex flex-col z-50 overflow-hidden ${
        !props.isOpen ? "hidden" : ""
      }`}
    >
      <Menu
        className="z-10"
        onMenuItemClick={() => {
          props.setIsOpen(false);
        }}
      />
      <Controls
        className="mt-auto z-10"
        controlStyles="bg-primary-50 dark:bg-dark-950 h-16 border-t first:border-l-0 flex min-h-0 aspect-square"
        controls={[
          {
            element: (
              <ThemeSwitcher className="h-full w-full flex items-center justify-center" />
            ),
          },
          {
            element: (
              <Link
                className="h-full w-full flex items-center justify-center"
                href=""
                locale="en"
              >
                EN
              </Link>
            ),
          },
          {
            element: (
              <Link
                className="h-full w-full flex items-center justify-center"
                href=""
                locale="es"
              >
                ES
              </Link>
            ),
          },
        ]}
      />
      <div
        className="absolute top-0 w-full h-full opacity-90 dark:bg-dark-950 bg-primary-50"
        onClick={() => {
          props.setIsOpen(false);
        }}
      />
    </div>
  );
};

export default MobileMenu;
