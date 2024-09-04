import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    // Check local storage for the theme preference on initial load
    const savedMode = localStorage.getItem("theme");
    return savedMode ? savedMode : "dark-theme";
  });

  const toggle = () => {
    const newMode = mode === "dark-theme" ? "light" : "dark-theme";
    setMode(newMode);
    localStorage.setItem("theme", newMode); // Save the new mode in local storage
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.remove("dark-theme", "light");
    body.classList.add(mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
