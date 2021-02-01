import React from "react";
import "./components/Box.jsx"
import './App.css';
import "./styles/global.css"
import Box from "./components/Box.jsx";
const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

export class App extends React.Component {

  water = {
    icon: "local_drink",
    color: "#3A85FF",
    value: 1.5,
    unit: "L",
    type: "water"
  }
  steps = {
    icon: "directions_walk",
    color: "black",
    value: 3000,
    unit: "steps"
  }
  heart = {
    icon: "favorite",
    color: "red",
    value: 120,
    unit: "bpm",
  }
  temperature = {
    icon: "wb_sunny",
    color: "yellow",
    value: -10,
    unit: "°C"
  }  
  constructor(props) {
      super(props);
        this.state = { 
          water: 0,
          heart: 120,
          temperature : -10,
          steps  : 3000,

          calculateWater : (value) => {
            this.setState (
              {water : this.state.value}
            );
          },

          onHeartChange : (value) => {
            this.setState(
              { heart: value.target.value}
              );
            },

          onStepsChange : (value) => {
              this.setState(
                { steps: value.target.value}
                );
              },

          onTemperatureChange : (value) => {
                this.setState(
                  { temperature: value.target.value}
                  );
              },     
        };
      }
      

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <p>heart: {heartMin}</p>
            <p>Temperature: {tempMin}</p>
            <p>Steps: {stepsMin}</p>
            {/* Water*/}
            <Box {...this.water}></Box>
            {/* Steps*/}
            <Box {...this.steps} min = {stepsMin} max = {stepsMax} value = {this.state.steps} onChange = {this.state.onStepsChange}></Box>
            {/* Heart*/}
            <Box {...this.heart} min = {heartMin} max = {heartMax} value = {this.state.heart} onChange = {this.state.onHeartChange}></Box>
            {/* Temperature */}
            <Box {...this.temperature} min = {tempMin} max = {tempMax} value = {this.state.temperature} onChange = {this.state.onTemperatureChange}></Box>
        </div>
      </div>
    );
  }
}

export default App;