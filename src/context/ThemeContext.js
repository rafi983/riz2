import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default to light mode ('true'), but check for saved preference
  const [day, setDay] = useState(true);

  // On initial load, check localStorage for a saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      // If a theme is saved, use it
      setDay(savedTheme === "light");
    }
  }, []);

  // When the 'day' state changes, save it to localStorage
  useEffect(() => {
    localStorage.setItem("theme", day ? "light" : "dark");
  }, [day]);

  return (
    <ThemeContext.Provider value={{ day, setDay }}>
      {children}
    </ThemeContext.Provider>
  );
};
