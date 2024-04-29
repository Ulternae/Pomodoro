import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SettingsContext } from "../../context/settings";

const TimerOptions = () => {
  const { color } = useContext(SettingsContext);

  const stylesActive = () => {
    return `opacity-100  bg-${color} text-darkblue transition-colors duration-300 ease-in-out`;
  };
  const stylesInactive = () => {
    return "opacity-25";
  };
  const stylesGlobal = () => {
    return `hover:opacity-100 text-center 
    leading-none transition-opacity rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out`;
  };

  return (
    <div className="mx-auto md:w-96 w-80 bg-navy p-2  rounded-full h-16 grid grid-cols-3 gap-2 items-stretch text-lightblue z-10 font-bold">
      <NavLink
        to={"/pomodoro"}
        end
        className={({ isActive }) =>
          `${stylesGlobal()} ${isActive ? stylesActive() : stylesInactive()}`
        }
      >
        pomodoro
      </NavLink>
      <NavLink
        to={"/pomodoro/shortBreak"}
        className={({ isActive }) =>
          `${stylesGlobal()} ${isActive ? stylesActive() : stylesInactive()}`
        }
      >
        short break
      </NavLink>
      <NavLink
        to={"/pomodoro/longBreak"}
        className={({ isActive }) =>
          `${stylesGlobal()} ${isActive ? stylesActive() : stylesInactive()}`
        }
      >
        long break
      </NavLink>
    </div>
  );
};

export { TimerOptions };
