import React from 'react';

import Equation from '../equation';

const App = () => {

  const serverData = [
    { id: 1, type: 'linear', form: 'ax + bx = 0' },
    { id: 2, type: 'quadratic', form: 'ax^2 + bx + c = 0'}
  ]

  const equations = serverData.map((eq) => {
    return (
      <div key={ eq.id } className="mt-5">
        <Equation
          title={ eq.type[0].toUpperCase() + eq.type.slice(1) + " equation" }
          form={ eq.form }
          placeholder={ eq.type + " equation" } />
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
