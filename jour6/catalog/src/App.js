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
              <Switch>
                <Route path='/description/:id' component={Description} />
              </Switch>

              {movies.map((data, key) => {
                return (
                  <div key={key}>
                    {data.id + " . "}
                    <span>
                      <Link to='/'></Link>
                      <Link to={`/Description/${data.id}`}>{data.title}</Link>
                    </span>
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
