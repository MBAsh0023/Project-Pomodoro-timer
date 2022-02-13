import React from "react"
import { minutesToDuration } from "../utils/duration";


export default function FocusSession ({focusDuration,setFocusDuration,session}){
    const decreaseFocusByFiveMin = () => {
        setFocusDuration(Math.max(5, focusDuration - 5));
    }

    const increaseFocusByFiveMin = () => {
      setFocusDuration(Math.min(60, focusDuration + 5));
    }
    
    
      return (
          
        <>
        <div className="pomodoro">
        <div className="row">
          <div className="col">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-focus">
                {/* TODO:DONE Update this text to display the current focus session duration */}
                Focus Duration: {minutesToDuration(focusDuration)}
              </span>
              <div className="input-group-append">
                {/* TODO:DONE Implement decreasing focus duration and disable during a focus or break session */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-focus"
                  onClick={decreaseFocusByFiveMin}
                  disabled={session}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO:DONE Implement increasing focus duration and disable during a focus or break session */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-focus"
                  onClick = {increaseFocusByFiveMin}
                  disabled={session}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
        </>
    )
  }