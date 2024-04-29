import { TimerOptions } from "../components/TimerOptions";
import { Layout } from "./Layout";
import logo from "/assets/logo.svg";
import settings from "/assets/settings.svg";
import { TimerCount } from "../components/TimerCount";
import { useContext, useState } from "react";
import { SettingsContext } from "../context/settings";
import { createPortal } from "react-dom";
import { Settings } from "./Settings";

const Home = () => {
  const { font } = useContext(SettingsContext);
  const [settingsPortal, setSettingsPortal] = useState(false);

  return (
    <Layout>
      <div
        className={`md:p-12 gap-8 items-center py-8 grid justify-center min-h-screen  font-${font}`}
      >
        <div className="grid gap-8">
        <img className="mx-auto" src={logo} alt="Pomodoro Title" />
        <TimerOptions />
        </div>
        <TimerCount />
        <img
          className="mx-auto"
          src={settings}
          alt="Settings"
          onClick={() => setSettingsPortal(true)}
        />
        {settingsPortal &&
          createPortal(
            <Settings openPortal={setSettingsPortal} />,
            document.body
          )}
      </div>
    </Layout>
  );
};

export { Home };
