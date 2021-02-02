import React from "react";

export class Form extends React.Component {
  //we need the constructor to initiate some values
    constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: '',
        submit: '',
        emailValid: false,
        passwordValid: false,
        submitClick: false
    }
    }

  //since we're inside a class we declare our function without "function"
  handleEmailChange = (event) => {
    //in order to register the value in state
    //to update the state of email or ...
    const newEmail = event.target.value;
    const reg = /^\S+@\S+\.\S+$/g;
    const isEmail = reg.test(newEmail);

    this.setState({
        email: newEmail,
        emailValid: isEmail
    })
  }

  handlePasswordChange = (event) => {
    let newPasswordValid = false;
    if (event.target.value.length >= 6) {
        newPasswordValid = true
    } else {
        newPasswordValid = false
    }

      this.setState({
          password: event.target.value,
          passwordValid: newPasswordValid
      })
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
          submitClick: true
      })
  }


    render() {

    if (this.state.submitClick === true) {
    return(<div>SUCCESS</div>)
    } 
        return(
            <form className="form">
                <div className="form-group">
                    <label className="email">Email address</label>
                    <input type="email" 
                    name="email"
                    className={ this.state.emailValid ? 'form-control is-valid' : 'form-control is-invalid'}
                    placeholder="Enter email..." 
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    ></input>
                </div>

                <div className="form-group">
                    <label className="password">Password</label>
                    <input type="password"
                    name="password" 
                    className={this.state.passwordValid ? 'form-control is-valid' : 'form-control is-invalid'}
                    placeholder="Enter password..." 
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    ></input>
                </div>

                <div>
                <input className="remember"
                type="checkbox"/>
                <label>Remember me</label>
                </div>

                <button type="submit"
                className="btn btn-primary"
                onChange={this.handleSubmit}
                disabled={!this.state.emailValid || !this.state.passwordValid}>
                submit
                </button>
            </form>
        )
    }

    }


export default Form;