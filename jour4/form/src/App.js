import React from "react";
import "./components/Form.jsx"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form.jsx";

export class App extends React.Component {
  render() {
    return (
      <div className = "container">
        <div className="row">
          <h2>Login</h2>
        <Form></Form>
        </div>
      </div>

      
    );
  }
}

export default App;