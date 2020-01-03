import React, { Component } from "react";
import Preview from "./Preview";
import Code from "./Code";
import styled from "styled-components";

const ResultStyle = styled.section`
  background-color: #f2f3f8;
  padding: 20px 60px 40px;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    background-color: #ddd;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    outline: 1px solid slategrey;
  }
  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    color: var(--mainColor);
    margin-bottom: 30px;
  }
  section {
    max-width: 650px;
    min-height: 300px;
    margin: 0 auto;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
    .sexy_section_word {
      background-color: rgba(68, 103, 173, 0.1);
      color: rgba(68, 103, 173, 0.2);
      position: absolute;
      top: 0;
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
  }
`;

export default class Result extends Component {
  // state = {
  //   buttonCssProperties: {}
  // }
  // componentWillMount(){

  // }
  handleButtonCss = () => {
    let buttonUpdated = { ...this.props.button };
    let cssProperty;

    for (let key in buttonUpdated) {
      cssProperty = key;

      // Delete buttonText item because it's a css property
      if (
        cssProperty === "buttonText" ||
        buttonUpdated[key] === "none" ||
        buttonUpdated[key] === "normal" ||
        buttonUpdated[key] === 0
      ) {
        delete buttonUpdated[cssProperty];
      }

      // Update backgroundColor & color values
      if (cssProperty === "backgroundColor" || cssProperty === "color") {
        buttonUpdated[cssProperty] = `rgba(${buttonUpdated[cssProperty].r}, ${
          buttonUpdated[cssProperty].g
        }, ${buttonUpdated[cssProperty].b}, ${buttonUpdated[cssProperty].a})`;
      }
    }
    return buttonUpdated;
  };

  render() {
    return (
      <ResultStyle>
        <h1>Button Generator</h1>
        <Preview
          handleButtonCss={this.handleButtonCss}
          buttonText={this.props.button.buttonText}
        />
        <Code handleButtonCss={this.handleButtonCss} />
      </ResultStyle>
    );
  }
}
