import { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className='card-container' key={this.props.structure.id}>
                <img alt={`structure ${this.props.structure.name}`} src={`https://robohash.org/${this.props.structure.id}?set=set4`} />
                <h2>{this.props.structure.name}</h2>
                <p>{this.props.structure.address.street}</p>
            </div>
        );
    }
}

export default Card;