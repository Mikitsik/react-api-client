import React, { Component } from 'react';
import './input-quadratic.css'

export default class InputQuadratic extends Component {

  constructor () {
    super();

    this.state = {
      quadratic: {
        a: '0',
        b: '0',
        c: '0'
      }
    }

    this.takeData = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({
        quadratic: {
            ...this.state.quadratic,
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
                   value={ this.state.quadratic.a.value }
                   onChange={ this.takeData } />
            <label htmlFor="a"><span className="quadratic">x<sup>2</sup> + </span></label>
            <input type="number"
                   className="form-control"
                   id="b"
                   name="b"
                   placeholder="b"
                   value={ this.state.quadratic.b.value }
                   onChange={ this.takeData } />
            <label htmlFor="b"><span className="quadratic">x + </span></label>
            <input type="number"
                   className="form-control"
                   id="c"
                   name="c"
                   placeholder="c"
                   value={ this.state.quadratic.c.value }
                   onChange={ this.takeData } />
            <label htmlFor="c"><span className="quadratic">= 0</span></label>
        <button className="btn btn-outline-info mx-1">
          <span className="calculate">
            Calculate
          </span>
        </button>
      </form>
    );
  };
};
