import React from "react";
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
    };
  }

  decrementCount = () => {
  this.setState({count: this.state.count - 1 });
  }

  incrementCount = () => {
  this.setState({count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1 className="text-primary">Counter</h1>
        <h2>{this.state.counter}</h2>
        <button style={{backgroundColor: "green"}} onClick={this.decrementCount}>-</button>
        <button style={{backgroundColor: "red"}} onClick={this.incrementCount}>+</button>
      </div>
    );
  }
}

export default App;