import React from 'react';
import './Button.css';

class ButtonDisplay extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Button",
      isPressed: false,
    }
  }

  render() {
    return (
      <div>
        <button classonClick={props.onClick}>{props.value}</button>
      </div>
    );
  }
}

export default ButtonDisplay