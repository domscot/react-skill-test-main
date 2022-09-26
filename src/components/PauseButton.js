import React, { useState } from "react";
import TimeSpend from "./TimeSpend";

function PauseButton() {
  const [showText, setShowText] = useState(true);
  const Text = () => <div>You clicked the button!</div>;

  function onClick() {
    if (showText === false) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  }

  return (
    <div class="flex flex-col">
      {showText ? <TimeSpend className="my-4" /> : null}
      <button
        className="inline-block px-6 py-2.5  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light"
        onClick={onClick}
      >
        Toggle
      </button>
    </div>
  );
}

export default PauseButton;
