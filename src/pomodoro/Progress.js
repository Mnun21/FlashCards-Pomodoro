import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

/*

Contains Progress Bar 

*/

function Progress({
  mode: sessionType,
  isTimerRunning,
  timeRemaining,
  isSessionActive,
  focusDuration,
  breakDuration,
}) {
  let currentDuration = sessionType === "focus" ? focusDuration : breakDuration;
  let percent = (1 - timeRemaining / (currentDuration * 60)) * 100;

  if (!isSessionActive) {
    return null;
  }
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2 data-testid="session-title">
            {sessionType === "focus"
              ? `Focusing for ${minutesToDuration(focusDuration)} minutes`
              : `On Break for ${minutesToDuration(breakDuration)} minutes`}
          </h2>
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(timeRemaining)} remaining
          </p>
          <h3>{!isTimerRunning && isSessionActive ? "PAUSED" : null}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="progress" style={{ height: "15px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={percent} 
              style={{ width: `${percent}%` }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
