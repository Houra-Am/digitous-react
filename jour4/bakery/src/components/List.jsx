import React from 'react';

export class List extends React.Component {
render() {
    return (
        <div>
            {this.props.listItems.map(current => {
                return (<li>{current.name} - {current.price}</li>)
            })}
        </div>
    )
}
}

export default List;