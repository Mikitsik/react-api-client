import React from 'react';

import Equation from '../equation';

const App = () => {

  const serverData = [
    { id: 1, type: 'linear', form: 'ax + b = 0' },
    { id: 2, type: 'linear special', form: 'ax + b = cx + 7'},
    { id: 3, type: 'quadratic', form: 'ax^2 + bx + c = 0'},
    { id: 4, type: 'quadratic special', form: 'ax^2 = bx - 1'},
    { id: 5, type: 'quadratic special two', form: 'ax = bx + cx^2 + 3'},
    { id: 6, type: 'cubic', form: 'ax^3 + bx^2 + cx + d = 0'}
  ]

  const equations = serverData.map((eq) => {
    return (
      <div key={ eq.id } className="mt-5">
        <Equation
          title={ eq.type[0].toUpperCase() + eq.type.slice(1) + " equation" }
          form={ eq.form } type={ eq.type } />
      </div>
    );
  });

  return (
    <div className="container p-5">
      { equations }
    </div>
  );
};

export default App;
