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
          <div>
            <IdenticalInput
              inputValue={this.state.text}
              handleTextInput={this.handleTextInput}
            />
          </div>
          <div>
            <IdenticalInput
              inputValue={this.state.text}
              handleTextInput={this.handleTextInput}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
