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
    margin-bottom: 20px;
  }
  input {
    background-color: rgba(51, 56, 66, 0.8);
    padding: 10px 12px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    outline-color: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`;

export default class Controlls extends Component {
  getInputValue = e => {
    // console.log(e.target.value);
    let key = e.target.getAttribute("data-key");
    let newValue = e.target.value;
    this.props.changeButtonInfo(key, newValue);
  };
  render() {
    return (
      <ControllsStyle>
        <h2>Controlls</h2>
        <input
          type="text"
          data-key="text"
          placeholder="Default text"
          onChange={this.getInputValue}

          //   value={
          //     this.props.button.text === "Default text"
          //       ? ""
          //       : this.props.button.text
          //   }
        />
      </ControllsStyle>
    );
  }
}
