import React from 'react';

import Title from './title';
import Subtitle from './subtitle';
import Input from './input';

const Equation = (props) => {
  return (
    <div>
      <Title title={ props.title } />
      <Subtitle subtitle={ props.subtitle } />
      <Input placeholder={ props.placeholder } />
    </div>
  );
};

export default Equation;
