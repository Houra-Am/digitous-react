import React from 'react';
const priceMin = 1;
const priceMax= 10;

export class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          productName: "",
          price: 1,
        }
      }
 

      updateProductName=(e) => {        
        this.setState({
          productName : e.target.value}
          );
      }

      updatePrice = (e) => {  
          this.setState({
          price : e.target.value}
          );
      }

      slider() {
      return (<input type="range" onChange={this.updatePrice} 
      value={this.state.price} min={priceMin} max={priceMax}></input>)
       }

      add=() =>{
      this.props.addItem (this.state.productName, this.state.price)
       }

    render() {
    const {price, value, item} = this.props;
    return (
       
      <div className="container">
            <div className="row form-group">              
                <input type="text" placeholder="Item" value={this.state.productName} onChange={this.updateProductName} />
                <p>{this.state.price}{"€"}</p>
                {this.slider()}
            </div>
            <button onClick={this.add} type="submit" className="btn btn-primary">Add</button>           
      </div>
       
            

        
    )
}
}

export default Add;