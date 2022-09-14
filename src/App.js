import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      structures: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { structures: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        <h1>Provincetown Structures</h1>
        <input
          className="search-box"
          type="search"
          placeholder="search addresses"
          onChange={(event) => {
            const filteredStructures = this.state.structures.filter((address) => {
              return address.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
            });
            this.setState(() => {
              return{structures: filteredStructures}
            })
          }}
        />
        {this.state.structures.map((structure) => {
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

export default App;
