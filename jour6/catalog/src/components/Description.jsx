import React from "react";
import { movies } from "../data"; //not very sure about the path

export class Description extends React.Component {
  render() {
    return (
      <div className='stock-container'>
        {movies.map((data, key) => {
          return (
            <div key={key}>
              {data.title}
              <div className='image-container d-flex justify-content-start m-3'>
                <img
                  src={movies.image}
                  alt={`The movie titled: ${movies.title}`}></img>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Description;
