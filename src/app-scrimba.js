import React, { Component } from "react";
import ReactDOM from "react-dom";

function App() {
    const [goOut, setGoOut] = React.useState("Yes")
    
    function toggleGoOut() {
        setGoOut(prevState => {
            return prevState === "Yes" ? "No" : "Yes"
        })
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Should I go out tonight?</h1>
            <div
                
                className="state--value" onClick={toggleGoOut}>
                <h1>{goOut}</h1>
            </div>
        </div>
    )
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
