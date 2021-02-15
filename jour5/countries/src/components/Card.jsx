import React from "react";

export class Card extends React.Component {
  render() {
    return (
      <div>
        <div className='card'>
          <img src={this.props.flag} alt='flag' className='card-img-top' />
          <div className='card-content'>
            <p className='cardBody-text'>Country: {this.props.name}</p>
            <p className='cardBody-text'>Capital: {this.props.capital}</p>
            <p className='cardBody-text'>Region: {this.props.region}</p>
            <p className='cardBody-text'>population: {this.props.population}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
