import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "./components/Description";
import { movies } from "./data"; //not very sure about the path
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import MovieList from "./components/MovieList";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className='container-fluid'>
            <div className='row'>
              {movies.map((data, key) => {
                return (
                  <div key={key}>
                    {data.id + " . "}
                    <span>
                      <Link to='/'></Link>
                      <Link to='/Description'>{data.title}</Link>
                    </span>

                    {/* 
                    <Link to='/'>Description {data.title}</Link>
                    <a href={"/" + key}>{data.title}</a>
                    +
              " , " +
              data.director +
              " , " +
              data.stars +
              " , " +
              data.image +
              " , " +
              data.description */}
                    <Switch>
                      <Route exact path='/' component={App} />
                      <Route path='/description/:id' component={Description} />
                    </Switch>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
