import { Component } from 'react';
import './cardList.css';

class CardList extends Component {
    render() {
        return (
            <div>
                {this.props.structures.map((structure) => {
                    return (
                        <div key={structure.id}>
                            <img alt={`structure ${structure.name}`} src={`https://robohash.org/${structure.id}?set=set4&size=180x180`} />
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