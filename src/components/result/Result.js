import React, { Component } from "react";
import Preview from "./Preview";
import OuterCode from "./OuterCode";
import styled from "styled-components";

const ResultStyle = styled.div`
  background-color: #f2f3f8;
  padding: 20px 60px;
  h1{
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    color: var(--mainColor);
    margin-bottom: 30px;
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
        />
        <OuterCode />
      </ResultStyle>
    );
  }
}
