import React, { useState, useEffect } from "react";

const useDebounce = (value?: any, delay?: any) => {
  const [debounceValue, setDeBounceValue] = useState<any>(value);
  useEffect(() => {
    const timeOut = setTimeout(() => setDeBounceValue(value), delay);
    return () => {
      clearTimeout(timeOut);
    };
  }, [value]);
  return debounceValue;
};

export default useDebounce;
