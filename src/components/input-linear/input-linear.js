import React, { Component } from 'react';
import EquationService from '../../services/equation-service';
import './input-linear.css'

export default class InputLinear extends Component {

  constructor () {
    super();

    this.equationService = new EquationService();
    this.pp = {}

    this.state = {
      data: {
        a: '0',
        b: '0',
        permit_token: 'th1$iSa$upEr$equr3T0k3n'
      },
      output: {

      }
    }

    this.takeData = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({
        data: {
            ...this.state.data,
            [name]: value
          }
      });
    };

    this.onSubmit = (event) => {
      event.preventDefault();

      this.equationService.calculateLinear(this.state)
        .then((data) => {
            this.setState({
              output: JSON.stringify(data)
            });
        });
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
                   value={ this.state.data.a.value }
                   onChange={ this.takeData } />
            <label htmlFor="a"><span className="linear">x + </span></label>
            <input type="number"
                   className="form-control"
                   id="b"
                   name="b"
                   placeholder="b"
                   value={ this.state.data.b.value }
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
