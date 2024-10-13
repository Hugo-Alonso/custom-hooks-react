import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  // Función para incrementar en base al valor dado
  const increment = (value = 1) => {
    setCounter((prevCounter) => prevCounter + value);
  };

  // Función para decrementar en base al valor dado
  const decrement = (value = 1) => {
    setCounter((prevCounter) => {
      // Si el valor a restar es mayor que el contador actual, retornar 0
      return prevCounter - value < 0 ? 0 : prevCounter - value;
    });
  };

  // Función para resetear al valor inicial o al especificado
  const reset = (value = initialValue) => {
    setCounter(value);
  };

  return {
    counter,
    increment,
    decrement
  };
};
