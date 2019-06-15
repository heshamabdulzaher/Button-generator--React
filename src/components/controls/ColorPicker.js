import React, { Component } from "react";
import { ChromePicker } from "react-color";
import styled from "styled-components";

export const ColorPickerStyles = styled.div`
  .active_color {
    width: 70px;
    height: 24px;
    border: 2px solid #fff;
    border-radius: 2px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
  .popover {
    position: absolute;
    z-index: 2;
  }
  .cover {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
`;

export default class ColorPicker extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: "0",
      g: "0",
      b: "0",
      a: "1"
    }
  };

  componentWillMount() {
    let UpdatedcolorObject = { ...this.state.color };
    UpdatedcolorObject.r = this.props.myValueIs.r;
    UpdatedcolorObject.g = this.props.myValueIs.g;
    UpdatedcolorObject.b = this.props.myValueIs.b;
    UpdatedcolorObject.a = this.props.myValueIs.a;
    this.setState({ color: UpdatedcolorObject });
  }

  showColorPicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  closeColorPicker = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    // Update color object
    let UpdatedcolorObject = { ...this.state.color };
    UpdatedcolorObject.r = color.rgb.r;
    UpdatedcolorObject.g = color.rgb.g;
    UpdatedcolorObject.b = color.rgb.b;
    UpdatedcolorObject.a = color.rgb.a;
    this.setState({ color: UpdatedcolorObject });
    let key = this.props.myKeyIs;
    let newValue = this.state.color;
    this.props.updateMyButton(key, newValue);
  };

  render() {
    const activeColor = {
      backgroundColor: `rgba(${this.state.color.r}, ${this.state.color.g}, ${
        this.state.color.b
      }, ${this.state.color.a})`
    };
    return (
      <ColorPickerStyles>
        <div
          style={activeColor}
          className="active_color clickable"
          onClick={this.showColorPicker}
        />
        {this.state.displayColorPicker ? (
          <div className="popover">
            <div onClick={this.closeColorPicker} className="cover" />
            <ChromePicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </ColorPickerStyles>
    );
  }
}
