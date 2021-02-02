import React from "react";

export class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        email: '',
        password: '',
        submit: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
    }
  }

  onChange=(event) => this.handleUserInput(event)

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
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
            <form className="form">
                <div className="form-group">
                    <label className="email">Email address</label>
                    <input type="email" 
                    name="email"
                    placeholder="Enter email..."
                    className="form-control" 
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="password">Password</label>
                    <input type="password"
                    name="password" 
                    placeholder="Enter password..." 
                    className="form-control"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    ></input>
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label" htmlFor="invalidCheck">Remember me</label>
                    <input className="form-check-input"
                    type="checkbox"/>
                </div>
                <button type="submit"
                className="btn btn-primary"
                disabled={!this.state.formValid}>
                    submit
                </button>
            </form>
        )
    }
}

export default Form;