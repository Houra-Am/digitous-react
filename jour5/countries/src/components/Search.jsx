import React, { Component } from "react";
import Button from "./Button";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "",
    };
  }

  updateCountryName = (e) => {
    this.setState({
      searchName: e.target.value,
    });
    console.log({ countryName: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Search for a country...'
          className='form-control'
          value={this.state.searchName}
          onChange={this.props.onChange}
        />
        <Button
          onClick={() => {
            this.getCountry(this.state.searchName);
          }}
          className={"btn btn-primary"}>
          Search
        </Button>
      </div>
    );
  }
}

export default Search;
