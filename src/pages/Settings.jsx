import { useContext, useState } from "react";
import check from "/assets/check.svg";
import close from "/assets/close.svg";
import { SettingsContext } from "../context/settings";
import { COLORS, FONTS, OPCIONS_TIME } from "../theme";
import { ButtonColor } from "../components/Buttons/ButtonColor";
import { ButtonFont } from "../components/Buttons/ButtonFont";
import { InputTime } from "../components/Input/InputTime";

const Settings = ({ openPortal }) => {
  const { font, setFont, color, setColor, timers, setTimers } =
    useContext(SettingsContext);
  const [selectFont, setSelectFont] = useState(font);
  const [selectColor, setSelectColor] = useState(color);
  const [selectTimer, setSelectTimer] = useState({ ...timers });

  const focusFont = (value) => {
    if (value === selectFont) {
      return "bg-navy text-white";
    } else {
      return "bg-lightgrey text-darkblue";
    }
  };

  const focusColor = (value) => {
    if (value === selectColor) {
      return <img className="mx-auto" src={check} alt="Selecter color" />;
    }
  };

  const handleTimer = (values) => {
    setSelectTimer({ ...selectTimer, ...values });
  };

  const saveData = () => {
    setFont(selectFont);
    setColor(selectColor);
    setTimers(selectTimer);
    openPortal(false);

    const newData = {
      font: selectFont,
      color: selectColor,
      timers: { ...selectTimer },
    };
    localStorage.setItem("pomodoro", JSON.stringify(newData));
  };

  return (
    <div
      className={`fixed z-20  top-0 w-full min-h-full font-${selectFont} bg-[#0A0C1C]/50 grid place-content-center `}
    >
      <div className=" md:w-[540px] max-md:w-[90vw] md:h-[480px] h-[570px] max-md:h-[90vh] relative">
        <div className="bg-white w-full h-[calc(100%-28px)] rounded-3xl ">
          <section className="px-4 sm:px-8 md:px-12 py-4 md:py-6 border-b-2 flex justify-between items-center">
            <h1 className="text-navy font-bold text-xl md:text-3xl">
              Settings
            </h1>
            <img
              className="w-4 h-4 opacity-50 hover:opacity-100"
              src={close}
              alt="Close settings"
              onClick={() => openPortal(false)}
            />
          </section>
          <div className="px-4 sm:px-8 md:px-12 ">
            <section className="py-6 border-b-2">
              <h2 className="text-navy font-bold text-sm tracking-[5px] mb-6 md:mb-2 max-md:text-center">
                TIME (MINUTES)
              </h2>
              <div className="md:flex md:justify-between grid gap-3 ">
                {Object.keys(OPCIONS_TIME).map((value) => (
                  <InputTime
                    key={value}
                    timer={selectTimer}
                    type={value}
                    accion={handleTimer}
                  />
                ))}
              </div>
            </section>
            <section className="py-6 text-center border-b-2 md:flex md:justify-between md:items-center">
              <h2 className="text-navy font-bold text-sm mb-4 md:mb-0">FONT</h2>
              <div className="flex justify-center ">
                {Object.keys(FONTS).map((font) => (
                  <ButtonFont
                    key={font}
                    setFont={setSelectFont}
                    focusFont={focusFont}
                    font={font}
                  />
                ))}
              </div>
            </section>
            <section className="py-6 text-center md:flex md:justify-between md:items-center">
              <h2 className="text-navy font-bold text-sm mb-4 md:mb-0">
                COLOR
              </h2>
              <div className="flex justify-center ">
                {Object.keys(COLORS).map((color) => (
                  <ButtonColor
                    key={color}
                    setColor={setSelectColor}
                    focusColor={focusColor}
                    color={color}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <button
            className={`bg-${selectColor} hover:shadow-[inset_0px_0px_100px_-30px] transition-shadow rounded-full w-40 h-14 font-bold text-white text-base hover:bg-blend-screen`}
            onClick={saveData}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export { Settings };
