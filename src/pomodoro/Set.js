import React from "react";
import { minutesToDuration } from "../utils/duration";

/*

Contains the the buttons to change the focus and break times

*/

function Set ( {
  setFocusDuration,
  isSessionActive,
  isTimerRunning,
  focusDuration,
  breakDuration,
  setBreakDuration,
  }) {
const decreaseFocus = () => {
    setFocusDuration((lastFocus) => Math.max(5, lastFocus - 5)); 
  };

  const increaseFocus = () => {
    setFocusDuration((lastFocus) => Math.min(60, lastFocus + 5)); 
  };
  const decreaseBreak = () => {
    setBreakDuration((lastBreak) => Math.max(1, lastBreak - 1));
  };

  const increaseBreak = () => {
    setBreakDuration((lastBreak) => Math.min(15, lastBreak + 1));
  };
  

  return (
    <div className="row">
<div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus" style={{marginTop: "5px"}}>
              Focus Duration: {minutesToDuration(focusDuration)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={decreaseFocus}
                disabled={isSessionActive || isTimerRunning ? true : false} 
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={increaseFocus}
                disabled={isSessionActive || isTimerRunning ? true : false}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
         <div className="col">
         <div className="float-right">
           <div className="input-group input-group-lg mb-2">
             <span className="input-group-text" data-testid="duration-break">
               Break Duration: {minutesToDuration(breakDuration)}
             </span>
             <div className="input-group-append">
               <button
                 type="button"
                 className="btn btn-secondary"
                 data-testid="decrease-break"
                 onClick={decreaseBreak}
                 disabled={isSessionActive || isTimerRunning ? true : false}
               >
                 <span className="oi oi-minus" />
               </button>
               <button
                 type="button"
                 className="btn btn-secondary"
                 data-testid="increase-break"
                 onClick={increaseBreak}
                 disabled={isSessionActive || isTimerRunning ? true : false}
               >
                 <span className="oi oi-plus" />
               </button>
             </div>
           </div>
         </div>
       </div>
       </div>
  )
}

export default Set;