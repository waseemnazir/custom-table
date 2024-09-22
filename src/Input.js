// Atoms/Input.js
import React from 'react';
import './Input.css';

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="custom-input"
    />
  );
};

export default Input;
