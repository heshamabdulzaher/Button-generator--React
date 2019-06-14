import React, { Component } from "react";
import styled from "styled-components";

const PreviewStyle = styled.section`
  height: 300px;
  background-color: #fff;
  margin: auto;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
  .preview_word {
    background-color: rgba(68, 103, 173, 0.1);
    color: rgba(68, 103, 173, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100px;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-90deg);
      font-size: 50px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
`;

export default class Preview extends Component {
  render() {
    const dynamicStyles = {
      fontFamily: this.props.fontFamily,
      fontSize: this.props.fontSize,
      fontWeight: this.props.bold ? "bold" : 400,
      fontStyle: this.props.italic ? "Italic" : "normal",
      textTransform:
        this.props.textTransform === "" ? "none" : this.props.textTransform
    };
    return (
      <PreviewStyle>
        <button style={dynamicStyles}>
          {this.props.buttonText === ""
            ? "Default text"
            : this.props.buttonText}
        </button>
        <div className="preview_word">
          <span>Preview</span>
        </div>
      </PreviewStyle>
    );
  }
}
