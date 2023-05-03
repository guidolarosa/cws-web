import React, { useState } from 'react';
import { checkDarkTheme } from "@/utils/utils";
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(checkDarkTheme());

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
    <div
      className="w-20 h-20 flex items-center justify-center ml-auto border-l hover:bg-primary-500 hover:text-primary-50 dark:hover:bg-dark-500 cursor-pointer dark:hover:text-dark-950"
      onClick={handleThemeSwitch}
    >
      {isDark ? (
          <MdOutlineLightMode fontSize={'1.8rem'}/>
        ) : (
          <MdOutlineDarkMode fontSize={'1.8rem'}/>
      )}
    </div>
  );
};

export default ThemeSwitcher;