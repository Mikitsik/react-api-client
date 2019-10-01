import React from 'react';

import Title from '../title';
import Subtitle from '../subtitle';
import Input from '../input';

import './equation.css'

const Equation = ( { title, form, placeholder } ) => {
  return (
    <div className="card text-center border-success mb-3 equation">
      <div className="card-header">
        <Title title={ title } />
      </div>
      <div className="card-body">
        <h4 className="card-title">
          <Subtitle form={ form } />
        </h4>
        <p className="card-text">
          <Input placeholder={ placeholder } />
        </p>
      </div>
    </div>
  );
};

export default Equation;
