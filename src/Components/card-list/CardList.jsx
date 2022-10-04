import { Component } from 'react';
import Card  from '../card/Card.jsx';
import './cardList.css';

class CardList extends Component {
    render() {
        return (
            <div className='card-list'>
                {this.props.structures.map((structure) => {
                    return (
                        <Card structure={structure} />
                    );
                })}
            </div>
        );
    }
}

export default CardList;