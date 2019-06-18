import React, { Component } from "react";
import styled from "styled-components";
import ColorsControlsListItem from "./ColorsControlsListItem";

export const ColorsControlsStyle = styled.section`
  ul {
    list-style-type: none;
    li {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      color: #fff;
      padding-left: 18px;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #fff;
        opacity: 0.6;
      }
    }
  }
`;

export default class ColorsControls extends Component {
  state = {
    displayColorPicker: false,
    rgb: {
      r: 51,
      g: 51,
      b: 51,
      a: 1
    }
  };
  render() {
    return (
      <ColorsControlsStyle className="controls_group">
        <h3>Colors</h3>
        <ul className="controls_container">
          <ColorsControlsListItem
            text="background-color"
            myKeyIs="backgroundColorRGBA"
            myValueIs={this.props.backgroundColorRGBA}
            updateMyButton={this.props.updateMyButton}
          />
          <ColorsControlsListItem
            text="color"
            myKeyIs="colorRGBA"
            myValueIs={this.props.colorRGBA}
            updateMyButton={this.props.updateMyButton}
          />
        </ul>
      </ColorsControlsStyle>
    );
  }
}
