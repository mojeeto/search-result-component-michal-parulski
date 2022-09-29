import React, { useEffect, useState } from "react";

interface DynamicNumberProps {
  end: number;
}

const DynamicNumber: React.FC<DynamicNumberProps> = ({ end }) => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevState) => {
        if (prevState !== end) {
          return prevState + 1;
        }
        return prevState;
      });
    }, 150);
    return () => {
      clearInterval(interval);
      setNumber(0);
    };
  }, [end]);

  return <span>{number}</span>;
};

export default DynamicNumber;
