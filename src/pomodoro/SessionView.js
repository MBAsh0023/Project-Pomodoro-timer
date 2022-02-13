import React from "react"
import {secondsToDuration} from "../utils/duration"
import { minutesToDuration } from "../utils/duration"


export default function SessionView({
    session,
    isTimerRunning,
    focusDuration,
    breakDuration,
    focusDurationInMinutes,
    breakDurationInMinutes,
   }){
    
    const timeRemainingInMin = secondsToDuration(session?.timeRemaining)
    
    

    return (
      
        <div>
             {session?
      <div>
        
        {/* TODO:DONE! This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: DONE!Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for {session.label==="Focusing"
              ? minutesToDuration(focusDuration)
              : minutesToDuration(breakDuration)} minutes
            </h2>
            {/* TODO: DONE!Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {timeRemainingInMin} remaining
            </p>
            {!isTimerRunning?<h3>PAUSED</h3>: null}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={
                  100 - (100 * session.timeRemaining) /
                  (session.label === "Focusing"
                  ? focusDuration * 60
                  : breakDuration * 60)
                  } // TODO: Increase aria-valuenow as elapsed time increases
                style={{
                   width: `${
                     100 -( 100 *session.timeRemaining) /
                       (session.label === "Focusing"
                       ? focusDuration * 60
                      : breakDuration * 60)
                    }%`
                      }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div> : null}

        </div>
    )
}