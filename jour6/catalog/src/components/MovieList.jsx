import React from "react";
import { movies } from "../data"; //not very sure about the path

export class MovieList extends React.Component {
  render() {
    return (
      <div className='stock-container'>
        {movies.map((data, key) => {
          return (
            <div key={key}>
              {data.id + " . "}
              <span>{data.title}</span>

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
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
