import React from 'react';
import ReactDom from 'react-dom';

import Equation from './components/equation';

const App = () => {
  return (
    <div className="container text-center p-5">
      <Equation title="Linear equation" subtitle="Please, type ax + b = 0 equation form"
                placeholder="linear equation" />
      <Equation title="Quadratic equation" subtitle="Please, type ax2 + bx + c = 0 equation form"
                placeholder="quadratic equation" />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
