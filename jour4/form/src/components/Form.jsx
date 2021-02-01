import React from "react";

export class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        email: '',
        password: ''
    }
  }

  handleEmailChange = (event) => {
    this.setState({
        email: event.target.value
    })
  }

  handlePasswordChange = (event) => {
      this.setState({
          password: event.target.value
      })
  }


    render() {
        return(
            <form>
                <div>
                    <label>Email address</label>
                    <input type="email" 
                    placeholder="Enter email..." 
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    ></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" 
                    placeholder="Enter password..." 
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    ></input>
                </div>
            </form>
        )
    }
}

export default Form; 