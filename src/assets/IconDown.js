import React from 'react';

const IconDown = ({ width = '48px', height = '48px', stroke = '#000000', strokeWidth = '3' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 64 64" 
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
    >
      <polyline points="6.53 18.86 33.16 44.12 57.42 18.86" />
    </svg>
  );
};

export default IconDown;
