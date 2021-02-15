import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import Search from "./components/Search";
import Card from "./components/Card";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      searchInput: "",
    };
  }

  componentDidMount() {
    this.getCountry("France");
  }

  getCountry = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((response) => response.json()) //.json() in order to transform the data to an object that can be manipulated
      .then((apiCountryNameResult) => {
        this.setState({
          name: apiCountryNameResult[0].name,
          capital: apiCountryNameResult[0].capital,
          flag: apiCountryNameResult[0].flag,
          population: apiCountryNameResult[0].population,
          region: apiCountryNameResult[0].region,
        });
      })
      .catch(console.log);
  };

  countrySearch = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
    console.log({ searchInput: e.target.value });
  };

  countrySearchButton = () => {
    this.getCountry(this.state.searchInput);
  };

  render() {
    return (
      <div className='container justify-content-center'>
        <h1 className='m-4'>Country Selectors</h1>
        <span>Country</span>

        <div>
          <Search
            onChange={this.countrySearch}
            onClick={this.countrySearchButton}
          />
        </div>

        <div className='col-12'>
          <Button onClick={() => this.getCountry("France")}>France</Button>
          <Button onClick={() => this.getCountry("Brazil")}>Brazil</Button>
          <Button onClick={() => this.getCountry("Croatia")}>Croatia</Button>
          <Card {...this.state} />
        </div>

        <div></div>
      </div>
    );
  }
}

export default App;
