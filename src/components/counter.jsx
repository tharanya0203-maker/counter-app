import { useState } from "react";
import "./Counter.css";

// ✅ Icons
import { FaRunning, FaPlus, FaMinus, FaRedo } from "react-icons/fa";

function Counter() {
  const [steps, setSteps] = useState(0);

  const increment = () => setSteps(steps + 1);

  const decrement = () => {
    if (steps > 0) setSteps(steps - 1);
  };

  const reset = () => setSteps(0);

  return (
    <div className="phone-card">
      
      {/* Top White Section */}
      <div className="top-section">
        <h1 className="title">Track Steps</h1>
      </div>

      {/* Bottom Orange Section */}
      <div className="bottom-section"></div>

      {/* 🏃 Big Circle Running Icon */}
      <div className="round-icon">
        <FaRunning className="running-icon" />
      </div>

      {/* Counter Display */}
      <div className="counter-display">
        <h2>{steps}</h2>
        {steps === 0 && (
          <p className="warning-text">Minimum limit reached</p>
        )}
      </div>

      {/* Buttons */}
      <div className="button-group">

        <button className="action-btn" onClick={increment}>
          <span>Step In</span>
          <div className="icon-box">
            <FaPlus />
          </div>
        </button>

        <button className="action-btn" onClick={decrement}>
          <span>Step Out</span>
          <div className="icon-box">
            <FaMinus />
          </div>
        </button>

        <button className="action-btn" onClick={reset}>
          <span>Reset</span>
          <div className="icon-box">
            <FaRedo />
          </div>
        </button>

      </div>
    </div>
  );
}

export default Counter;
