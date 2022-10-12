import React, { Component } from "react";
import "./App.css";

function App() {
  const [goOut, setGoOut] = React.useState("Yes");

  function toggleGoOut() {
    setGoOut((prevState) => {
      return prevState === "Yes" ? "No" : "Yes";
    });
  }

  return (
    <div className="state">
      <h1 className="state--title">Should I go walk at lunch?</h1>
      <button className="state--value button" onClick={toggleGoOut}>
        {goOut}
      </button>
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
