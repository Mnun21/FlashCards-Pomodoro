import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Progress from "./Progress";
import Set from "./Set";
import Control from "./Play-Pause-Stop";


function Pomodoro() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);
  const [sessionType, setSessionType] = useState("focus");
  const [isSessionActive, setIsSessionActive] = useState(false);

  useInterval(
    () => {
      if (timeRemaining === 0) {
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
        const duration = sessionType === "focus" ? breakDuration : focusDuration; 
        setTimeRemaining(duration * 60); 
        setSessionType((prevMode) => (prevMode === "focus" ? "break" : "focus"));
        return;
      }
      setTimeRemaining((currentTimeRemaining) => currentTimeRemaining - 1);
    },
    isTimerRunning ? 1000 : null
  );  

  return (

    
    <div className="pomodoro">

        <Set 
       setFocusDuration={setFocusDuration}
       focusDuration={focusDuration}
       isSessionActive={isSessionActive}
       isTimerRunning={isTimerRunning}
       breakDuration={breakDuration}
        setBreakDuration={setBreakDuration}
        />
     <Control
       setIsSessionActive={setIsSessionActive}
       setTimeRemaining={setTimeRemaining}
       setIsTimerRunning={setIsTimerRunning}
       setMode={setSessionType}
       isSessionActive={isSessionActive}
       focusDuration={focusDuration}
       isTimerRunning={isTimerRunning}
     />

      <Progress
        mode={sessionType}
        isTimerRunning={isTimerRunning}
        timeRemaining={timeRemaining}
        isSessionActive={isSessionActive}
        focusDuration={focusDuration}
        breakDuration={breakDuration}
      />
    </div>
  );
}

export default Pomodoro;
