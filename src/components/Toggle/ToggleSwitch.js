import React, { useState } from "react";

function ToggleSwitch(props) {
 
  const [toggle, setToggle] = useState("light");

  const toggleSwitch = () => {
    if (toggle == "light") {
      setToggle("dark");
    } else {
      setToggle("light");
    }
  };
  props.toggleAdd(toggle);

  return (

    <div>
      <button onClick={toggleSwitch}>
        {toggle[0].toUpperCase() + toggle.slice(1, toggle.length)} - Mode
      </button>
    </div>
  );
}

export default ToggleSwitch;
