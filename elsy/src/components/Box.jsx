import React from "react";

export class Box extends React.Component {
  render() {
    if (this.props.icon !== "local_drink") {
        return (
            <div className="box col-sm-3 col-6">
              <span
                style={{ color: this.props.color, fontSize: 100 }}
                className="material-icons">
                {this.props.icon}
              </span>
              <p>
                {this.props.value}
                {this.props.unit}
              </p>
              <input type="range" min= {this.props.min} max= {this.props.max} value={this.props.value} onChange={this.props.onChange}></input>
            </div>
          );
    } else {
        return (
            <div className="box col-sm-3 col-6">
              <span
                style={{ color: this.props.color, fontSize: 100 }}
                className="material-icons">
                {this.props.icon}
              </span>
              <p>
                {this.props.value}
                {this.props.unit}
              </p>             
            </div>
        );
    }

    
  }
}

export default Box;
