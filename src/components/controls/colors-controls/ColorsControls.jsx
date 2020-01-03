import React, { Component } from "react";
import styled from "styled-components";
import ColorPicker from "../../shared/ColorPicker";

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
  render() {
    return (
      <ColorsControlsStyle className="controls_group">
        <h3>Colors</h3>
        <ul className="controls_container">
          <li>
            <span>background-color</span>
            <ColorPicker
              renderColor={this.props.backgroundColor}
              myKeyIs="backgroundColor"
              updateMyButton={this.props.updateMyButton}
            />
          </li>
          <li>
            <span>text-color</span>
            <ColorPicker
              renderColor={this.props.color}
              myKeyIs="color"
              updateMyButton={this.props.updateMyButton}
            />
          </li>
        </ul>
      </ColorsControlsStyle>
    );
  }
}
