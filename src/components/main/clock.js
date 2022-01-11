import { useState, useEffect } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <p>{` ${time.toLocaleDateString('en-AU')} ${time.toLocaleTimeString('en-AU')}`}</p>;
}
