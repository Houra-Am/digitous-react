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
  }
}

selectAdd = (e) => {
    this.setState({
      activeTab: "add"
    })
}
selectList = (e) => {
    this.setState({
      activeTab: "list"
    })
}
selectPay = (e) => {
    this.setState({
      activeTab: "pay"
    })
}

toto = (name, price) => {
  console.log(name)
  const obj = {
    name: name,
    price: price
  }
  const newList = this.state.items
  newList.push(obj)

  this.setState({
    items: newList
  })
}

renderContent() {
if (this.state.activeTab === 'add') {
  return <Add addItem={this.toto}>

  </Add>
}
if (this.state.activeTab === 'list') {
  return <List listItems={this.state.items}></List>
}
if (this.state.activeTab === 'pay') {
  return <Pay></Pay>
}
}

  render() {   
    return (
      <div className="App">
{/* ----> add button <-----*/}
         <Button onClick={this.selectAdd} isSelected={this.state.activeTab==="add" ? true : false}> Add</Button>
{/* ----> list button <-----*/}
         <Button onClick={this.selectList} isSelected={this.state.activeTab==="list" ? true : false}> List</Button>
{/* ----> pay button <-----*/}
         <Button onClick={this.selectPay } isSelected={this.state.activeTab==="pay" ? true : false}> pay</Button>       
         
         {this.renderContent()}
      
      </div>


    )
  }
}

export default App;