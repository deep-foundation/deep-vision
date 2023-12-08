import { useEffect, useState } from 'react';

export default function useTimer() {
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  return seconds;
}