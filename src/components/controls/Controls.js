import React, { Component } from "react";
import { ControllsStyle } from "./ControlsStyles";
import Text from "./Text";

export default class Controls extends Component {
  handleChangeEvent = e => {
    let key = e.target.getAttribute("data-key");
    let newValue = e.target.value;
    this.props.changeButtonInfo(key, newValue);
  };
  render() {
    return (
      <ControllsStyle>
        <h2>Controls</h2>
        <div className="all_controls_components">
          <Text />
        </div>
      </ControllsStyle>
    );
  }
}
