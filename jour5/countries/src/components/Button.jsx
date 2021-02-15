import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick} className={"btn btn-primary"}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;
