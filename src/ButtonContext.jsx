import React, { createContext, useState, useEffect } from 'react';

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [buttonClick, setClickedButtons] = useState([]);

  const handleButtonClick = (buttonId) => {
    setClickedButtons((prevClickedButtons) => [...prevClickedButtons, buttonId]);
  };

  useEffect(() => {
    setClickedButtons([]);
  }, []); // Run this effect only once, when the component mounts

  return (
    <ButtonContext.Provider value={{ buttonClick, handleButtonClick }}>
      {children}
    </ButtonContext.Provider>
  );
};
