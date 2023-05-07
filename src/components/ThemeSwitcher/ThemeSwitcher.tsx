import React, { useState, useEffect } from 'react';
import { checkDarkTheme } from "@/utils/utils";
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const ThemeSwitcher = (props : any) => {
  const [isDark, setIsDark] = useState<boolean>(true);

  const handleThemeSwitch = () => {
    if (checkDarkTheme()) {
      setIsDark(true);
      document.querySelector("html")?.classList.remove("dark");
    } else {
      setIsDark(false);
      document.querySelector("html")?.classList.add("dark");
    }
  };

  return (
    <div onClick={handleThemeSwitch} className={`w-full h-full flex items-center justify-center ${props.className}`}>
      {isDark ? (
          <MdOutlineLightMode fontSize={'1.8rem'}/>
        ) : (
          <MdOutlineDarkMode fontSize={'1.8rem'}/>
      )}
    </div>
  );
};

export default ThemeSwitcher;