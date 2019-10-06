import React from 'react';

import EquationLinear from '../equation-linear';
import EquationQuadratic from '../equation-quadratic';

const App = () => {
  return (
    <div className="container p-5">
      <EquationLinear />
      <EquationQuadratic />
    </div>
  );
};

export default App;
