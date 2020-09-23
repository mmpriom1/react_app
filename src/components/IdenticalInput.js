import React from "react";
import PropTypes from "prop-types";

class IdenticalInput extends React.Component {
  static defaultProps = {
    inputValue: "",
  };

  render() {
    return (
      <input
        value={this.props.inputValue}
        onChange={this.props.handleTextInput}
      />
    );
  }
}

IdenticalInput.propTypes = {
  handleTextInput: PropTypes.func.isRequired,
};

export default IdenticalInput;
