import React, { Component } from 'react';

export default class Input extends Component {

  render() {

    const { placeholder } = this.props;

    return <input className="mt-2" placeholder= { placeholder } />;
  };
};
