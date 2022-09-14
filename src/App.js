import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      structures: [ ],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Provincetown Structures</h1>
        {this.state.structures.map((structure) => {
          return (
            <div key={structure.id}>
              <h2>{structure.name}</h2>
              <p>{structure.nickname}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
