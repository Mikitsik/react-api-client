import React, { Component } from 'react';
import './input.css'

export default class Input extends Component {
  render() {
    const { form, type } = this.props;

    const eqSigns = form.match(/[^\^\w]+/g);
    const eqMems = form.match(/[\^\w]+/g).map((item) => {
      return item.replace(/[^\^x\d]+/, " " )
    });

    const inputs = eqMems.map((input, index) => {
      if (/\D/.test(input)) {
        return (
          <div key={ index + type } className="d-flex align-items-center">
            <input type="text" className="form-control mx-1"
                   id={ index + type} size="2" />
            <label htmlFor={ index + type} className="members">{ input }</label>
            <span className="members">{ eqSigns[index] }</span>
          </div>
        );
      } else {
        return (
          <div key={ index + type } className="align-self-center">
            <span className="members">{ input }</span>
          </div>
        );
      }
    });

    return (
      <form className="d-flex justify-content-center">
        { inputs }
        <button className="btn btn-outline-info mx-1">
          <span className="calculate">
            Calculate
          </span>
        </button>
      </form>
    );
  };
};
