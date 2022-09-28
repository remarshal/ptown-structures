import { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div>
                <input
                    className="search-box"
                    type="search"
                    placeholder="search structures"
                    onChange={this.props.onChangeHandler}
                />
            </div>
        );
    }
}

export default SearchBox;