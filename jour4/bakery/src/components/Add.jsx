import React from 'react';

export class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          productName: [],
          price: 1
        }
      }

      updateProductName=(e) => {

      }

render() {
    return (
    <div>
        <form className="form">
                <div className="form-group">
                    <label className="text">Email address</label>
                    <input type="text" 
                    name="text"
                    placeholder="Enter email..." 
                    value={this.state.email}
                    onChange={this.updateProductName}
                    ></input>
                </div>
       </form>
    </div>
    )
}
}

export default Add;