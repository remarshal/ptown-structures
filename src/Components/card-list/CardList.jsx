import { Component } from 'react';
import './cardList.css';

class CardList extends Component {
    render() {
        return (
            <div className='card-list'>
                {this.props.structures.map((structure) => {
                    return (
                        <div className='card-container' key={structure.id}>
                            <img alt={`structure ${structure.name}`} src={`https://robohash.org/${structure.id}?set=set4`} />
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