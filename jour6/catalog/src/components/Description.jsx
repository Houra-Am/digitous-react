import React from "react";
import { movies } from "../data"; //not very sure about the path

export class Description extends React.Component {
  render() {
    return (
      <div className='stock-container'>
        {movies.map((movie, key) => {
          return (
            <div key={key}>
              <p>Director: {movie.director}</p>
              <p>Description: {movie.description}</p>
              <p>{`Stars: ${movie.stars}`}</p>
              <div className='image-container d-flex justify-content-start m-3'>
                <img src={movies.image}></img>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Description;
