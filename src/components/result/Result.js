import React, { Component } from "react";
import Preview from "./Preview";
import OuterCode from "./OuterCode";
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
  render() {
    return (
      <ResultStyle>
        <h1>Button Generator</h1>
        <Preview
          buttonText={this.props.buttonText}
          fontFamily={this.props.fontFamily}
          fontSize={this.props.fontSize}
          bold={this.props.bold}
          italic={this.props.italic}
          textTransform={this.props.textTransform}
          backgroundColorRGBA={this.props.backgroundColorRGBA}
          colorRGBA={this.props.colorRGBA}
        />
        <OuterCode
          fontFamily={this.props.fontFamily}
          fontSize={this.props.fontSize}
          bold={this.props.bold}
          italic={this.props.italic}
          textTransform={this.props.textTransform}
          backgroundColorRGBA={this.props.backgroundColorRGBA}
          colorRGBA={this.props.colorRGBA}
        />
      </ResultStyle>
    );
  }
}
