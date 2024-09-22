// Atoms/Button.js
import React from 'react';
import './Button.css';

const Button = ({ onClick, children, active }) => {
  return (
    <button
      onClick={onClick}
      className={`custom-button ${active ? 'active' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
