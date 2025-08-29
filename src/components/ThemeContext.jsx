import React, { createContext, useState } from "react";
import {useEffect} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

    useEffect(() => {
    document.body.className = theme; // Apply "light" or "dark" as a class
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;