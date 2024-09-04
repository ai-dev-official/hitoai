import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const ToggleMode = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const [isDark, setIsDark] = useState(mode === "dark-theme"); // Initialize based on the current mode

  // Update the isDark state whenever the mode changes
  useEffect(() => {
    setIsDark(mode === "dark-theme");
  }, [mode]);

  return (
    <div className={"mode__container"} onClick={() => {
      toggle();
      setIsDark(!isDark); // Toggle the icon based on the new mode
    }}>
      <div className={"mode__icon"}>
        {isDark ? "🌙" : "🔆"}
      </div>
    </div>
  );
};

export default ToggleMode;
