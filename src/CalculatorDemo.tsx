import React, { useState } from "react";
import { SconeButton, SconeCalculator } from "scone-js-common";
import "./styles.css";

function CalculatorDemo() {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showSkip, setShowSkip] = useState(true);
  const [completed, setCompleted] = useState(false);

  const handleCompletion = (footPrintDetails: any) => {
    console.log("completed", footPrintDetails);
    setCompleted(true);
    alert("completed");
  };

  const handleStepChange = (step: number, footPrintDetails: any) => {
    console.log("step", step, footPrintDetails);
  };

  const handleSkip = (footPrintDetails: any) => {
    console.log("skip", footPrintDetails);
    alert("skipped");
  };

  return (
    <div className="App">
      {!completed && (
        <div className="content">
          <div className="controls">
            <SconeButton
              type="ghost"
              size="medium"
              className="side-bar"
              onClick={() => setShowSideBar(!showSideBar)}
            >
              {showSideBar ? "Hide Sidebar" : "Show Sidebar"}
            </SconeButton>

            <SconeButton
              type="ghost"
              size="medium"
              onClick={() => setShowSkip(!showSkip)}
            >
              {showSkip ? "Hide Skip" : "Show Skip"}
            </SconeButton>
          </div>

          <SconeCalculator
            offsetRoute="https://www.scone.ai/offsets/intro/"
            showSideBar={showSideBar}
            locale={"nl-NL"}
            onCompletion={handleCompletion}
            onStepChange={handleStepChange}
            onSkip={handleSkip}
          />
        </div>
      )}

      {completed && <h1>You have submitted the data successfully!</h1>}
    </div>
  );
}

export default CalculatorDemo;
