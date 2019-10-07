import React, { Component } from 'react';
import EquationService from '../../services/equation-service';
import './input-quadratic.css'

export default class InputQuadratic extends Component {

  constructor () {
    super();

    this.equationService = new EquationService();

    this.state = {
      data: {
        a: '0',
        b: '0',
        c: '0',
        permit_token: 'th1$iSa$upEr$equr3T0k3n'
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

      this.equationService.calculateQuadratic(this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
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
            <label htmlFor="a"><span className="quadratic">x<sup>2</sup> + </span></label>
            <input type="number"
                   className="form-control"
                   id="b"
                   name="b"
                   placeholder="b"
                   value={ this.state.data.b.value }
                   onChange={ this.takeData } />
            <label htmlFor="b"><span className="quadratic">x + </span></label>
            <input type="number"
                   className="form-control"
                   id="c"
                   name="c"
                   placeholder="c"
                   value={ this.state.data.c.value }
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
