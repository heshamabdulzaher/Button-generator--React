import React, { Component } from "react";
import styled from "styled-components";

const PreviewStyle = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: center;
  margin-bottom: 30px !important;
  align-items: center;
  .sexy_section_word {
    left: 0;
  }
`;

export default class Preview extends Component {
  render() {
    const dynamicStyles = {
      fontFamily: this.props.fontFamily,
      fontSize: this.props.fontSize,
      fontWeight: this.props.bold ? "bold" : 400,
      fontStyle: this.props.italic ? "Italic" : "normal",
      textTransform: this.props.textTransform
        ? this.props.textTransform
        : "none",
      backgroundColor: `rgba(${this.props.backgroundColorRGBA.r}, ${
        this.props.backgroundColorRGBA.g
      }, ${this.props.backgroundColorRGBA.b}, ${
        this.props.backgroundColorRGBA.a
      })`,
      color: `rgba(${this.props.colorRGBA.r}, ${this.props.colorRGBA.g}, ${
        this.props.colorRGBA.b
      }, ${this.props.colorRGBA.a})`
    };
    return (
      <PreviewStyle>
        <button style={dynamicStyles}>
          {this.props.buttonText === ""
            ? "Default text"
            : this.props.buttonText}
        </button>
        <div className="sexy_section_word">
          <span>Preview</span>
        </div>
      </PreviewStyle>
    );
  }
}
