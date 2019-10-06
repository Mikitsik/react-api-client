import React from 'react';
import InputLinear from '../input-linear';
import './equation-linear.css'

const EquationLinear = () => {
  return (
    <div className="card text-center border-info my-3 equation">
      <div className="card-header">
        <h1>Linear equation</h1>
      </div>
      <div className="card-body">
        <h4 className="card-title">
          Please, type <span className="equation-linear">ax + b = 0</span> standard form
        </h4>
        <div className="card-text">
          <InputLinear />
        </div>
      </div>
    </div>
  );
};

export default EquationLinear;
