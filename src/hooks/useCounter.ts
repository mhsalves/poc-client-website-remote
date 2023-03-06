import { useCallback, useEffect, useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const resetCounter = useCallback(() => {
    setCount(0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return { count, resetCounter };
}

export default useCounter;