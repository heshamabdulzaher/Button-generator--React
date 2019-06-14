import React, { Component } from "react";
import { ControllsStyle } from "./ControlsStyles";
import Text from "./Text";

export default class Controls extends Component {
  render() {
    return (
      <ControllsStyle>
        <h2>Controls</h2>
        <div className="all_controls_components">
          <Text changeButtonInfo={this.props.changeButtonInfo} />
        </div>
      </ControllsStyle>
    );
  }
}
