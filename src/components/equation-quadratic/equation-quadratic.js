import React from 'react';
import InputQuadratic from '../input-quadratic';
import './equation-quadratic.css'

const EquationQuadratic = () => {
  return (
    <div className="card text-center border-info my-5 equation">
      <div className="card-header">
        <h1>Quadratic equation</h1>
      </div>
      <div className="card-body">
        <h4 className="card-title">
          Please, type <span className="equation-linear">ax<sup>2</sup> + bx + c = 0</span> standard form
        </h4>
        <div className="card-text">
          <InputQuadratic />
        </div>
      </div>
    </div>
  );
};

export default EquationQuadratic;
