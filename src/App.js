import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      structure0: {
        name: '77a Commercial',
        nickname: 'Wharf House'
      },
      structure1: {
        name: '82 Commercial',
        nickname: 'Fillmore Miller House'
      },
      structure2: {
        name: '117 Commerical',
        nickname: '1 Engine Co. 1'
      }
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Provincetown Structures</h1>
        <h2>{this.state.structure0.name}</h2>
        <h2>{this.state.structure1.name}</h2>
        <h2>{this.state.structure2.name}</h2>
      </div>
    );
  }
}

export default App;
