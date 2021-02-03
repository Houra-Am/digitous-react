import React, { Children } from "react";
import './App.css';
import Button from "./components/Button";
import  Add  from "./components/Add";
import Pay from "./components/Pay";
import List from "./components/List";
import 'bootstrap/dist/css/bootstrap.min.css';


export class App extends React.Component {
constructor() {
  super();
  this.state = {
    activeTab : 'add',
    items: [],
    isSelected: false
  }
}

selectAdd = (e) => {
    this.setState({activeTab: "add"})
}
selectList = (e) => {
    this.setState({activeTab: "list"})
}
selectPay = (e) => {
    this.setState({activeTab: "pay"})
}

  render() {   
    return (
      <div className="container">
        <div className="row">

{/* ----> add button <-----*/}
         <div className="col-md-1 align-self-start">
         <Button type="button"
          isSelected={
          this.state.activeTab==="add"
          ? "form-control btn btn-primary"
          : "form-control btn btn-light"}
        onClick={this.selectAdd}>
          Add
         </Button>
         </div>

{/* ----> list button <-----*/}
         <div className="col-md-1 align-self-start">
         <Button type="button"
          isSelected={
          this.state.activeTab==="list"
          ? "form-control btn btn-primary"
          : "form-control btn btn-light"}
        onClick={this.selectList}>
          List
         </Button>
        </div>

{/* ----> pay button <-----*/}
         <div className="col-md-1 align-self-start">
         <Button type="button"
          isSelected={
          this.state.activeTab==="pay"
          ? "form-control btn btn-primary"
          : "form-control btn btn-light"}
        onClick={this.selectPay }>
          pay
         </Button>
         </div>

        </div>
      </div>
    )
  }
}

export default App;