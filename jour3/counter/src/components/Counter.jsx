import React from "react";

class Counter extends React.Component {
    render() {
        const {count, addFunction, removeFunction} = this.props;
        return (
            <div>
            <h2>{count}</h2>
            <button onClick={removeFunction}>-</button>
            <button onClick={addFunction}>+</button>

           </div>
        )
    }
}

export default Counter;