import { Component } from 'react';

class CardList extends Component {
    render() {
        return (
            <div>
                {this.props.structures.map((structure) => {
                    return (
                        <div key={structure.id}>
                            <h2>{structure.name}</h2>
                            <p>{structure.address.street}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CardList;