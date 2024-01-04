import { useState } from 'react';

export const useDealingFlow = (maxIndex: number, onFinish?: () => void) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const increment = () => setCurrentIndex(currentIndex + 1);
  const decrement = () => setCurrentIndex(currentIndex - 1);

  const isFirstCard = currentIndex === 0;
  const isLastCard = currentIndex === maxIndex - 1;

  const handleFinish = () => {
    setCurrentIndex(0);
    onFinish?.();
  };

  return {
    currentIndex,
    isFirstCard,
    isLastCard,
    increment,
    decrement,
    handleFinish
  };
};
