import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const ToggleMode = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className="mode__container" onClick={toggle}>
      <div className="mode__icon">
        {mode === "dark-theme" ? "🌙" : "🔆"}
      </div>
    </div>
  );
};

export default ToggleMode;
