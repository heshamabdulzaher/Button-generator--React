import React, { Component } from "react";
import TextControls from "./text-controls/TextControls";
import styled from "styled-components";
import ColorsControls from "./colors-controls/ColorsControls";
import SizeControls from "./size-controls/SizeControls";

const ControllsStyle = styled.section`
  background-color: var(--darkBG);
  height: 100vh;
  h2 {
    height: 50px;
    background-color: #4467ad;
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 22px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .controls_group {
    padding: 20px;
    border-bottom: 2px solid var(--lightBG);
    h3 {
      font-size: 15px;
      font-weight: bold;
      text-transform: uppercase;
      font-style: italic;
      color: #aaa;
    }
    .controls_container {
      margin-top: 12px;
    }
  }
`;

export default class ControlsContainer extends Component {
  render() {
    return (
      <ControllsStyle>
        <h2>Controls</h2>
        <div className="all_controls_components">
          <TextControls updateMyButton={this.props.updateMyButton} />
          <ColorsControls
            backgroundColor={
              this.props.button.backgroundColor
            }
            color={this.props.button.color}
            updateMyButton={this.props.updateMyButton}
          />
          <SizeControls updateMyButton={this.props.updateMyButton} />
        </div>
      </ControllsStyle>
    );
  }
}
