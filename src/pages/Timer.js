import { useState, useEffect } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('updateTimer');
      setTimer(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <section>{timer.toString()}</section>;
};

export default Timer;
