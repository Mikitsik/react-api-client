import React from 'react';
import './result.css'

const Result = (props) => {
  return (
    <p className="result">
      { props.data }
    </p>
  );
};

export default Result;
