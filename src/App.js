import React, { Component } from 'react';
import './App.css';



class App extends Component {
	state = { counter: 0 }

	incrementCount = () => {
		this.setState( { counter: this.state.counter +1 });
	}
  render() {
    return (
      <div>
        <span className="value">
        	{this.state.counter}
        </span>
        <button className="btn"  id="inc" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default App;

