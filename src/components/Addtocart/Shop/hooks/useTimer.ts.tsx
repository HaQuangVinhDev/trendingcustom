// ../hooks/useTimer.ts
import { useState, useEffect, useCallback } from 'react';

export const useTimer = (initialMinutes: number, initialSeconds: number) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  const tick = useCallback(() => {
    if (minutes === 0 && seconds === 0) return;

    if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else {
      setSeconds(seconds - 1);
    }
  }, [minutes, seconds]);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId);
  }, [tick]);

  return { minutes, seconds };
};
