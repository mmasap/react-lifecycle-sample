import { useEffect, useState } from 'react';

const Lifecycle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('componentDidMount');

    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  useEffect(() => {
    if (count === 0) return;
    console.log('componentDidUpdate');
  }, [count]);

  return (
    <section>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => ++prev)}>countUp</button>
    </section>
  );
};

export default Lifecycle;
