import { Component } from "react";
import CardList from "./Components/card-list/CardList";
import SearchBox from "./Components/search-box/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      structures: [],
      searchString: " ",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { structures: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString: searchString };
    });
  };

  render() {
    const filteredStructures = this.state.structures.filter((address) => {
      return address.name.toLocaleLowerCase().includes(this.state.searchString);
    });

    return (
      <div className="App">
        <h1>Provincetown Structures</h1>
        <SearchBox onChangeHandler={this.onSearchChange} placeholder="search structures" className="search-box" />
        <CardList structures={filteredStructures} />
      </div>
    );
  }
}

export default App;
