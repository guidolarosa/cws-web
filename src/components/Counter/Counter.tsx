import { useState, useEffect } from "react";

const Counter = (props : any) => {
  const [time, setTime] = useState("");

  const onCounterUpdate = () => {
    let argentinaTime = new Date().toLocaleString("es-AR");
    let splitString = argentinaTime.split(",")[1];

    setTime(splitString);
  };

  useEffect(() => {
    let timeInterval = setInterval(onCounterUpdate, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  });
  
  return (
    <div className="flex border-t item-center h-12">
      <div className="px-4 border-r bg-primary-500 dark:bg-dark-500 flex text-primary-50 dark:text-primary-950 items-center">
        ARG
      </div>
      <div className="px-4 flex justify-center w-full items-center">
        <span className="w-8 flex justify-center text-2xl">{time}</span>
      </div>
    </div>
  )
};

export default Counter;