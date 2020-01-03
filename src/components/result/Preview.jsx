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
  // componentWillMount() {
  //   let x = this.props.handleButtonCss();

  // }
  render() {
    const dynamicStyles = {};
    for (let key in this.props.handleButtonCss()) {
      dynamicStyles[key] = this.props.handleButtonCss()[key]
    }

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
