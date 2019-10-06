import React, { Component } from 'react';
import './input-linear.css'

export default class InputLinear extends Component {

  constructor () {
    super();

    this.state = {
      linear: {
        a: '0',
        b: '0'
      }
    }

    this.takeData = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({
        linear: {
            ...this.state.linear,
            [name]: value
          }
      });
    };

    this.onSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);

    }
  }

  render() {
    return (
      <form className="d-flex justify-content-center"
            onSubmit={ this.onSubmit } >
            <input type="number"
                   className="form-control"
                   id="a"
                   name="a"
                   placeholder="a"
                   value={ this.state.linear.a.value }
                   onChange={ this.takeData } />
            <label htmlFor="a"><span className="linear">x + </span></label>
            <input type="number"
                   className="form-control"
                   id="b"
                   name="b"
                   placeholder="b"
                   value={ this.state.linear.b.value }
                   onChange={ this.takeData } />
            <label htmlFor="b"><span className="linear">= 0</span></label>
        <button className="btn btn-outline-info mx-1">
          <span className="calculate">
            Calculate
          </span>
        </button>
      </form>
    );
  };
};
