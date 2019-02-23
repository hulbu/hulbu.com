import React, { Component } from "react";
import { Button, Normalize } from "@smooth-ui/core-sc";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Normalize />
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React <Button variant="primary">Hello world!</Button>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
