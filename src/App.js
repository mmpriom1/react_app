import React from "react";
import "./App.css";
import IdenticalInput from "./components/IdenticalInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(evt) {
    this.setState({
      text: evt.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Identical Component</h1>
        <div className="column">
          <div className="badge badge-primary m-2">
            <h3>Box 1</h3>
            {this.identicalComponent()}
          </div>
          <div className="badge badge-primary m-2">
            <h3>Box 2</h3>
            {this.identicalComponent()}
          </div>
        </div>
      </div>
    );
  }

  identicalComponent() {
    return (
      <span>
        <IdenticalInput
          inputValue={this.state.text}
          handleTextInput={this.handleTextInput}
        />
      </span>
    );
  }
}

export default App;
