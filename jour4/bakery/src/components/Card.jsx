import React from "react";
let itemName = "";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "./images/item.png",
    };
  }

  addProduct = () => {
    this.props.itemName(this.state.productName, this.state.price);
  };

  componentDidMount() {
    console.log("componentDidMount");
    fetch(
      `https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.itemName.png}`
    )
      .then((response) => response.blob())
      .then((response) => {
        this.setState({
          image: URL.createObjectURL(response),
        });
      });
  }

  render() {
    return (
      <div>
        <img onClick={(() => this.props.itemName, this.props.price)}></img>
      </div>
    );
  }
}

export default Card;
