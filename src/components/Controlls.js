import React, { Component } from "react";
import styled from "styled-components";

const ControllsStyle = styled.section`
  /* background-color: #282C34; */
  background-color: #21252b;
  width: 400px;
  height: 100vh;
  h2 {
    background-color: #333842;
    background-color: #4467ad;
    color: #fff;
    padding: 10px 20px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
  .form_control {
    width: calc(100% - 40px);
    margin: 0 20px 15px;
    position: relative;
    display: flex;
  }
  input {
    background-color: #333842;
    padding: 10px 12px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-right: 0;
    outline-color: rgba(0, 0, 0, 0.7);
    border-radius: 3px 0 0 3px;
    width: 100%;
    color: #fff;
    font-size: 16px;
  }
  .select_font_family {
    select {
      height: 100%;
      padding: 0 30px 0 15px;
      border-radius: 0 3px 3px 0;
      background-color: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-left: 0;
      outline-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      -webkit-appearance: none;
      option {
        padding: 8px 0;
        background-color: rgba(51, 56, 66, 1);
      }
    }
    svg {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
    }
  }
`;

export default class Controlls extends Component {
  handleChangeEvent = e => {
    let key = e.target.getAttribute("data-key");
    let newValue = e.target.value;
    this.props.changeButtonInfo(key, newValue);
  };
  render() {
    return (
      <ControllsStyle>
        <h2>Controls</h2>
        <div className="form_control lg">
          <input
            type="text"
            data-key="buttonText"
            placeholder="Default text"
            onChange={this.handleChangeEvent}
          />
          <div className="select_font_family">
            <select data-key="fontFamily" onChange={this.handleChangeEvent}>
              <option>Arial</option>
              <option>fantasy</option>
              <option>cursive</option>
              <option>monospace</option>
            </select>

            <svg width="12.118" height="6.039" viewBox="0 0 12.118 6.039">
              <path
                d="M0,96.879l6.059,6.039,6.059-6.039Z"
                transform="translate(0 -96.879)"
                fill="#333842"
              />
            </svg>
          </div>
        </div>
      </ControllsStyle>
    );
  }
}
