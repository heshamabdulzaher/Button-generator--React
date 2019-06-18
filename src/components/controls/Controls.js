import React, { Component } from "react";
import { ControllsStyle } from "./ControlsStyles";
import Text from "./Text";
import Colors from "./Colors";
import TextControls from "./text-controls/TextControls";

export default class Controls extends Component {
  render() {
    return (
      <ControllsStyle>
        <h2>Controls</h2>
        <div className="all_controls_components">
          <TextControls updateMyButton={this.props.updateMyButton} />
          {/* <Text updateMyButton={this.props.updateMyButton} /> */}
          <Colors
            updateMyButton={this.props.updateMyButton}
            backgroundColorRGBA={this.props.backgroundColorRGBA}
            colorRGBA={this.props.colorRGBA}
          />
        </div>
      </ControllsStyle>
    );
  }
}
