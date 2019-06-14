import React, { Component } from "react";
import styled from "styled-components";

const PreviewStyle = styled.section`
  width: 80%;
  height: 300px;
  background-color: #fff;
  margin: auto;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.06);
  &::before {
    content: "Preview";
    position: absolute;
    top: 50%;
    right: calc(100% - 80px);
    transform: translateY(-50%) rotate(-90deg);
    font-size: 60px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(0, 0, 0, 0.1);
  }
  button {
    text-transform: capitalize;
  }
`;

export default class Preview extends Component {
  render() {
    const dynamicStyles = {
      fontFamily: this.props.fontFamily
    };
    return (
      <PreviewStyle>
        <button style={dynamicStyles}>
          {this.props.buttonText === ""
            ? "Default text"
            : this.props.buttonText}
        </button>
      </PreviewStyle>
    );
  }
}
