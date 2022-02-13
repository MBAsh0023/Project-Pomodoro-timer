import React from "react"
import { minutesToDuration } from "../utils/duration";


export default function BreakSession ({breakDuration,setBreakDuration,session}){
    const decreaseBreakByOneMin = () => {
      setBreakDuration(Math.max(1, breakDuration - 1));
        
    }

    const increaseBreakByOneMin = () => {
      setBreakDuration(Math.min(15, breakDuration + 1));
    }

    
    return (
      <>
      <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            {/* TODO: DONE!Update this text to display the current break session duration */}
            Break Duration: {minutesToDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: DONE! Implement decreasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              onClick={decreaseBreakByOneMin}
              disabled={session}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: DONE! Implement increasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              onClick={increaseBreakByOneMin}
              disabled={session}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
      </>
  )
}