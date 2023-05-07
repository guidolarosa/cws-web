import Link from "next/link";
import { useState } from "react";

export default function HamburgerMenu(props : any) {

  const [active, setActive] = useState(false)

  const handleHamburgerClick = () => {
    props.onClick();
    setActive(!active)
  }

  const controlStyles = `absolute h-[2px] w-full bg-primary-500 dark:bg-dark-500 group-hover:dark:bg-dark-50 group-hover:bg-primary-50 transition-all`

  return (
    <>
      <style>{`
        .hamburger-menu.active div:first-of-type,
        .hamburger-menu.active div:last-of-type {
          opacity: 0;
        }
        .hamburger-menu.active div:nth-child(2) {
          transform: rotate(45deg);
        }
        .hamburger-menu.active div:nth-child(3) {
          transform: rotate(-45deg);
        }
        
      `}</style>
      <div className={`${active ? 'active' : ''} hamburger-menu relative w-6 h-4 flex items-center flex-column justify-center`} onClick={handleHamburgerClick}>
        <div className={`${controlStyles} top-0`}></div>
        <div className={`${controlStyles} top-[50%]`}></div>
        <div className={`${controlStyles} top-[50%]`}></div>
        <div className={`${controlStyles} top-[100%]`}></div>
      </div>
    </>
  );
}
