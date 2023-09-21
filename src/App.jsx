import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const numRef = useRef();

  useEffect(() => {
    startBtn();
  }, []);

  const startBtn = () => {
    numRef.current = setInterval(() => {
      setCount((p) => p + 1);
    }, 1000);
  };

  // const pauseBtn = () => {
  //   clearInterval(numRef.current);
  //   console.log("paused");
  // };
  const resetBtn = () => {
    setCount(0);
    clearInterval(numRef.current);
  };

  return (
    <>
      <div>
        <h1>Counter : {count}</h1>
        <div className="btn">
          <button onClick={startBtn} className="button">
            Start
          </button>
          <button
            onClick={() => {
              clearInterval(numRef.current);
            }}
            className="button"
          >
            Pause
          </button>

          <button onClick={resetBtn} className="button">
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
