import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SettingsContextProvider } from "./context/settings"

const App = () => {
  return (
    <HashRouter>
      <SettingsContextProvider>
        <Routes>
          <Route path="/pomodoro" element={<Home />}>
            <Route path=":option" element={<Home />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </SettingsContextProvider>
    </HashRouter>
  );
};

export { App };
