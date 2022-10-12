import React from "react"

class App extends React.Component {
    state = {
        show: true
    }
    
    toggle = () => {
        this.setState(prevState => ({show: !prevState.show}))
    }
    
    render() {
        return (
            <div className="container">
                <button onClick={this.toggle}>
                    Toggle WindowTracker
                </button>
                {this.state.show && <WindowTracker />}
            </div>
        )
    }
}

//  next component

class WindowTracker extends React.Component {
    state = {
        windowWidth: window.innerWidth
    }
    
    watchWidth = () => {
        this.setState({windowWidth: window.innerWidth})
    }
    
    componentDidMount() {
        window.addEventListener("resize", this.watchWidth)
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.watchWidth)
        // removes EventListener when toggle off
        // or used to disconnect any subscriptions, connections to websockets
    }
    
    render() {
        return (
            <h1>Window width: {this.state.windowWidth}px</h1>
        )
    }
}

export default App