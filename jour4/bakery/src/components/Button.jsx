import React from 'react';

export class Button extends React.Component {


render() {
    return (
        
            <button type="button" 
            onClick={this.props.onClick}
            className={this.props.isSelected === true ? "btn btn-primary" : "btn btn-light" }> 
            {this.props.children}
            </button>                  
    )
}
}

export default Button;