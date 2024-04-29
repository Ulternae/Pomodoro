import refresh from "/assets/refresh.svg";
import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../../context/settings";
import { AUDIO_REFERENCE, COLORS_REFERENCE, OPCIONS_TIME } from "../../theme";
import { useParams } from "react-router-dom";
import { playAudio, stopAudio } from "../PlaySound";

const TimerCount = () => {
  const { color, timers } = useContext(SettingsContext);
  const title = document.querySelector("title");
  const circumference = 2 * Math.PI * 90;
  const dasharray = "565.4866776461628";

  const params = useParams();
  const type = OPCIONS_TIME[params.option] || "pomodoro";
  const time = timers[type] * 60;

  const [offset, setOffset] = useState(0);
  const [timer, setTimer] = useState(time);
  const [timerState, setTimerState] = useState({
    progressBar: false,
    progressTimer: false,
    completeTimer: false,
  });

  const minutes = Math.abs(parseInt(timer / 60))
    .toString()
    .padStart(2, "0");
  const seconds = Math.abs(parseInt(timer % 60))
    .toString()
    .padStart(2, "0");

  const isCompletePomodoro =
    timerState.completeTimer && (seconds !== "00" || Number(minutes) > 0);
  const isRefresh =
    !timerState.completeTimer && offset !== 0 && !timerState.progressBar && timer !== time;

  title.textContent = isCompletePomodoro
    ? "Completed Time"
    : `Pomodoro ${minutes} : ${seconds}`;

  const handleTimerState = (updates) => {
    setTimerState({ ...timerState, ...updates });
  };

  const resetStates = () => {
    handleTimerState({
      progressBar: false,
      progressTimer: false,
      completeTimer: false,
    });
    setTimer(time);
    setOffset(0);
    stopAudio();
  };

  useEffect(() => {
    resetStates();
  }, [time]);

  useEffect(() => {
    let interval = null;
    if (timerState.progressBar) {
      const progressRate = circumference / time;
      interval = setInterval(() => {
        setOffset((prevState) => {
          const updatedOffset = prevState + progressRate;
          if (updatedOffset >= dasharray) {
            clearInterval(interval);
            playAudio("/audio/alarm1.mp3", AUDIO_REFERENCE[color]);
            handleTimerState({ progressBar: false, completeTimer: true });
            return dasharray;
          }
          return updatedOffset;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerState.progressBar]);

  useEffect(() => {
    let interval = null;

    if (timerState.progressTimer) {
      interval = setInterval(() => {
        setTimer((prevState) => prevState - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerState.progressTimer]);

  return (
    <>
      <style>{` .hover-text:hover {color: ${COLORS_REFERENCE[color]} }`}</style>

      <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] mx-auto rounded-full bg-gradient-to-tl from-[#2E325A] via-purple-500 to-[#0E112A] p-6 shadow-[-50px_-50px_100px_0px_#272c5a,50px_50px_100px_0_#272c5a]">
        <div className="bg-[#161932] w-full h-full rounded-full relative grid place-content-center">
          <div className="z-10">
            <p className="text-lightblue text-center text-5xl md:text-8xl font-bold mb-1 md:mb-4 relative">
              <span className="absolute left-0 md:-left-6 top-0 bottom-0 flex items-center text-4xl">
                {isCompletePomodoro && "-"}
              </span>
              <span>
                {""}
                {minutes}:{seconds}
              </span>
            </p>
            <div className="relative">
              {!timerState.completeTimer && (
                <p
                  onClick={() => {
                    handleTimerState({
                      progressBar: !timerState.progressBar,
                      progressTimer: !timerState.progressTimer,
                    });
                  }}
                  className="hover-text hover:transition-colors  ml-4 text-center font-bold text-lightblue text-sm md:text-base mx-auto tracking-[16px]"
                >
                  {!timerState.progressBar ? "START" : "PAUSE"}
                </p>
              )}
              {isRefresh && (
                  <img
                    onClick={resetStates}
                    className="absolute left-0 right-0 mx-auto mt-2"
                    src={refresh}
                    alt="refresh"
                  />
                )}
              {timerState.completeTimer && (
                <p
                  className="hover-text ml-4 text-center font-bold text-lightblue text-base mx-auto tracking-[16px]"
                  onClick={resetStates}
                >
                  RESTART
                </p>
              )}
            </div>
          </div>

          <div className="absolute top-0 right-0 bottom-0 left-0 p-2">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                strokeWidth="10"
                style={{
                  stroke: COLORS_REFERENCE[color],
                  opacity: 0.35,
                }}
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                strokeWidth="10"
                strokeDasharray="565.4866776461628"
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
                style={{
                  stroke: COLORS_REFERENCE[color],
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export { TimerCount };
