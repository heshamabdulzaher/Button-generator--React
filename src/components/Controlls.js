import React, { Component } from "react";
import styled from "styled-components";

const ControllsStyle = styled.section`
  /* background-color: #282C34; */
  background-color: #21252b;
  width: 400px;
  height: 100vh;
  h2 {
    background-color: #333842;
    color: #fff;
    padding: 10px 20px;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

export default class Controlls extends Component {
  render() {
    return (
      <ControllsStyle>
        <h2>Controlls</h2>
      </ControllsStyle>
    );
  }
}
