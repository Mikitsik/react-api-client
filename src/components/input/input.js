import React, { Component } from 'react';
import './input.css'

export default class Input extends Component {
  render() {
    const { form, type } = this.props;

    const signs = form.match(/[-+/*=]+/g);
    const members = form.match(/[\^\w]+/g);
    const variables = members.map((item) => {
      return item.replace(/[^\^xy\d]+/, " " )
    });
    const values = members.map((item) => {
      return item.replace(/[\^xy\d]+/, "" )
    });

    const inputs = variables.map((input, index) => {
      if (/[=]/.test(signs[index])) {
        return (
          <div key={ index + type } className="d-flex align-items-center">
            <input type="text" className="form-control mx-1"
                   id={ index + type} size="2"
                   placeholder={ values[index] } />
            <label htmlFor={ index + type} className="members">{ input }</label>
            <span className="members">{ signs[index] }</span>
          </div>
        );
      } else if (/\D/.test(input)) {
        return (
          <div key={ index + type } className="d-flex align-items-center">
            <input type="text" className="form-control mx-1"
                   id={ index + type} size="2"
                   placeholder={ values[index] } />
            <label htmlFor={ index + type} className="members">{ input }</label>
            <input type="text" className="form-control mx-1"
                   id={ index + signs[index] + type} size="2"
                   placeholder={ signs[index] }/>
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
