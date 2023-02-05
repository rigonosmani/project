import React, { useState } from "react";
import "./SlideUp.css";

const SlideUp = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <button onClick={handleClick}>Slide Up</button>
    </div>
  );
};

export default SlideUp;
