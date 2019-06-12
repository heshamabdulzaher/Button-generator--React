import React, { Component } from "react";
import Preview from "./Preview";
import OuterCode from "./OuterCode";
import styled from "styled-components";

const ResultStyle = styled.div`
  background-color: #f2f3f8;
  width: calc(100% - 400px);
  padding: 60px;
`;

export default class Result extends Component {
  render() {
    return (
      <ResultStyle>
        <Preview
          buttonText={this.props.buttonText}
          fontFamily={this.props.fontFamily}
        />
        <OuterCode />
      </ResultStyle>
    );
  }
}
