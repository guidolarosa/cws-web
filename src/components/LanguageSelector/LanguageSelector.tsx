import React from 'react';
import Link from "next/link";

const LanguageSelector = () => {
  return (
    <div className={'flex'}>
      <Link className="border-l h-20 w-20 flex items-center justify-center hover:bg-primary-500 hover:text-primary-50 dark:hover:bg-dark-500 dark:hover:text-dark-950" href="" locale="en">EN</Link>
      <Link className="border-l h-20 w-20 flex items-center justify-center hover:bg-primary-500 hover:text-primary-50 dark:hover:bg-dark-500 dark:hover:text-dark-950" href="" locale="es">ES</Link>
    </div>
  );
};

export default LanguageSelector;