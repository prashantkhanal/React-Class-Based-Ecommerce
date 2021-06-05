import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button className="btn-main">
          <p>{this.props.name}</p>
        </button>
      </div>
    );
  }
}
export default Button;
