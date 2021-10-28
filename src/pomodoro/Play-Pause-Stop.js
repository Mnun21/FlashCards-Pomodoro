import React from "react";
import classNames from "../utils/class-names";
  
/*

Contains the Play/Pause and Stop buttons
that affects when the progress bar is displayed

*/


function Control ({ 
setIsSessionActive,
setIsTimerRunning,
setTimeRemaining,
setMode: setSessionType,
isSessionActive,
focusDuration,
isTimerRunning,
}) {

const playPause = () => {
    if (!isSessionActive) {
      setIsSessionActive(true);
      setTimeRemaining(focusDuration * 60); 
    }
    setIsTimerRunning((prevState) => !prevState);
  }
   const stopTimer = () => {
    setIsSessionActive(false);
    setIsTimerRunning(false);
    setSessionType("focus");
  };
return (
  <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="stop"
              title="Stop the session"
              onClick={stopTimer}
              disabled={!isSessionActive}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>

  )
 }

 export default Control;