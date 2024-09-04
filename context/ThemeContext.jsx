import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark-theme");
  const [prevMode, setPrevMode] = useState("");

  const toggle = () => {
    setPrevMode(mode);
    setMode((prev) => (prev === "dark-theme" ? "light" : "dark-theme"));
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (prevMode) {
      body.classList.remove(prevMode);
    }
    body.classList.add(mode);
  }, [mode, prevMode]);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
