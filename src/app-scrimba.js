import React, { Component } from "react";
import "./App.css";

// convert to Class
// function App() {
//   const [goOut, setGoOut] = React.useState("Yes");

//   function toggleGoOut() {
//     setGoOut((prevState) => {
//       return prevState === "Yes" ? "No" : "Yes";
//     });
//   }

//   return (
//     <div className="state">
//       <h1 className="state--title">Should I learn more React?</h1>
//       <button className="state--value button" onClick={toggleGoOut}>
//         {goOut}
//       </button>
//     </div>
//   );
// }

class App extends Component {
state = {
            goOut: "Yes"
        };

    // arrow function required
    toggleGoOut  = () =>  {
        this.setState(prevState => {
            // state must be in object format
            return {
                goOut: prevState.goOut === "Yes" ? "No" : "Yes"
            }
        });
    }
    
    render() {

        return (
            <div className="state">
            <h1 className="state--title">Should I learn more React?</h1>
            <button className="state--value button" onClick={this.toggleGoOut}>
              {this.state.goOut}
            </button>
          </div>
        )
    }
}

export default App;
