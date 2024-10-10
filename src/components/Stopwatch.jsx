import { useEffect, useRef, useState } from "react";
import "../stopwatch.css";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIDRef = useRef(null);
  const startTimerRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIDRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimerRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIDRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimerRef.current = Date.now() - elapsedTime;
    // console.log(startTimerRef.current);
  }
  function pause() {
    setIsRunning(false);
  }
  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }
  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <>
      <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button onClick={start} className="start-btn">
            Start
          </button>
          <button onClick={pause} className="pause-btn">
            Pause
          </button>
          <button onClick={reset} className="reset-btn">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
