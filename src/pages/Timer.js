import { useState, useEffect } from 'react';

let interval;

const Timer = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    interval = setInterval(() => {
      console.log('updateTimer');
      setTimer(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <section>{timer.toString()}</section>;
};

export default Timer;
