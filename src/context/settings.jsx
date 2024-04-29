import { createContext, useState } from "react";
import { COLORS, FONTS, TIME } from "../theme";

const SettingsContext = createContext();

const SettingsContextProvider = ({ children }) => {
  const defaultValue = {
    font: FONTS.kumbg,
    color: COLORS.coral,
    timers: {
      pomodoro: TIME.pomodoro,
      shortBreak: TIME.shortBreak,
      longBreak: TIME.longBreak,
    }
  }

  const data = JSON.parse(localStorage.getItem("pomodoro")) || defaultValue

  const [font, setFont] = useState(data.font);
  const [color, setColor] = useState(data.color);
  const [timers, setTimers] = useState({...data.timers});

  return (
    <SettingsContext.Provider
      value={{ font, setFont, color, setColor, timers, setTimers }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsContextProvider };
