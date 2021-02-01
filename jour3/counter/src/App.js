import React from "react";
import "./App.css";
import Counter from "./components/Counter.jsx";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter 
        count={this.state.count} 
        addFunction = {this.incrementCount}
        removeFunction = {this.decrementCount}
          />
      </div>
    );
  }
}

export default App;
