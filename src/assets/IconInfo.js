import React, { useState } from 'react';

const IconInfo = () => {
  const [strokeColor, setStrokeColor] = useState("#000000");

  const handleMouseOver = () => {
    setStrokeColor("#858585");
  };

  const handleMouseOut = () => {
    setStrokeColor("#000");
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 64 64"
      strokeWidth="3"
      stroke={strokeColor}
      fill="none"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <line x1="32.06" y1="17.55" x2="32.06" y2="16.88" strokeLinecap="round" />
      <line x1="32.06" y1="45.3" x2="32.06" y2="24.87" strokeLinecap="round" />
      <circle cx="32" cy="32" r="24.25" strokeLinecap="round" />
    </svg>
  );
};

export default IconInfo;

