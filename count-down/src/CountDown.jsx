import { useState, useEffect, useRef } from "react";

const CountDown = () => {
  const [time, setTime] = useState(0); // state time for countdown in seconds
  const [isActive, setIsActive] = useState(false); // state to track if the timer is active
  const [isPause, setIsPause] = useState(false); // state to track if the timer is paused
  const intervalRef = useRef(null); // ref to hold the interval ID

  // handle input change for setting time
  const handleTime = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 0) {
      setTime(value * 60); // convert minutes to seconds
    } else {
      e.target.value = ""; // clear the input if the value is negative
    }
  };

  // convert time to mm:ss format
  const Timer = () => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // start the timer
  const handleStart = () => {
    setIsActive(true);
    setIsPause(false);
  };

  // pause the timer
  const handlePause = () => {
    setIsPause(!isPause);
  };

  // reset the timer
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPause(false);
    setTime(0);
  };

  // effect to run the countdown
  useEffect(() => {
    if (isActive && !isPause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalRef.current);
      setIsActive(false);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, time, isPause]);

  return (
    <div className="container">
      <h1>count down timer</h1>
      <input
        type="number"
        placeholder="enter time in minutes"
        onChange={handleTime}
        min="0" // prevent negative input via browser controls
      />
      {/* display the timer */}
      <h1 className="timer">{Timer()}</h1>
      <div className="button-group">
        <button onClick={handleStart} disabled={isActive}>
          start
        </button>
        <button onClick={handlePause} disabled={time === 0}>
          pause
        </button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};

export default CountDown;
