import React from 'react';
import ReactDom from 'react-dom';

import LinearHeader from './components/linear-header';
import LinearInput from './components/linear-input';
import QuadraticHeader from './components/quadratic-header';
import QuadraticInput from './components/quadratic-input';

const App = () => {
  return (
    <div>
      <LinearHeader />
      <LinearInput />
      <QuadraticHeader />
      <QuadraticInput />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
