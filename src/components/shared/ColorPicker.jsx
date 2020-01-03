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

class ColorPicker extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }
  };

  componentWillMount() {
    this.setState({ color: this.props.renderColor });
  }

  showColorPicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  closeColorPicker = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = newColor => {
    this.setState({ color: newColor.rgb });
    let key = this.props.myKeyIs;
    this.props.updateMyButton(key, newColor.rgb);
  };

  render() {
    let activeColor = {
      backgroundColor: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`
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

export default ColorPicker;
