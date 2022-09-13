import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      structures: [
        {
          id: 0,
          name: "77a Commercial",
          nickname: "Wharf House",
        },
        {
          id: 1,
          name: "82 Commercial",
          nickname: "Fillmore Miller House",
        },
        {
          
          id: 2,
          name: "117 Commerical",
          nickname: "1 Engine Co. 1",
        },
      ],
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
