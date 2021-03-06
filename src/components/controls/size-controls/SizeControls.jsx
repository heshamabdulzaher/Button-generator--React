import React, { Component } from "react";
import styled from "styled-components";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";

const SizeControlsStyles = styled.section`
  ul {
    list-style-type: none;
    li {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      color: #fff;
      padding-left: 18px;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #fff;
        opacity: 0.6;
      }
      span {
        color: #d19a66;
        font-style: italic;
      }
      .input-range {
        width: 110px;
        .input-range__track {
          background-color: var(--lightBG);
          .input-range__track--active {
            background-color: var(--mainColor);
          }
          .input-range__slider {
            background-color: #fff;
            border-color: #fff;
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
          }
        }
        .input-range__label {
          display: none;
        }
      }
    }
  }
`;
export default class SizeControls extends Component {
  state = {
    horizontalSizeValue: 10,
    verticalSizeValue: 20
  };

  updateHorizontalSizeValue = async value => {
    await this.setState({
      horizontalSizeValue: value
    });
    let key = "padding";
    let newValue = `${this.state.horizontalSizeValue}px ${this.state.verticalSizeValue}px`;
    this.props.updateMyButton(key, newValue);
  };
  updateVerticalSizeValue = async value => {
    await this.setState({
      verticalSizeValue: value
    });
    let key = "padding";
    let newValue = `${this.state.horizontalSizeValue}px ${this.state.verticalSizeValue}px`;
    this.props.updateMyButton(key, newValue);
  };
  render() {
    return (
      <SizeControlsStyles className="controls_group">
        <h3> size </h3>{" "}
        <ul className="controls_container">
          <li>
            <div className="text">
              Horizontal size{" "}
              <span>
                {" "}
                {this.state.horizontalSizeValue}
                px{" "}
              </span>{" "}
            </div>{" "}
            <InputRange
              maxValue={25}
              minValue={5}
              value={this.state.horizontalSizeValue}
              onChange={this.updateHorizontalSizeValue}
            />{" "}
          </li>{" "}
          <li>
            <div className="text">
              Vertical size{" "}
              <span>
                {" "}
                {this.state.verticalSizeValue}
                px{" "}
              </span>{" "}
            </div>{" "}
            <InputRange
              maxValue={50}
              minValue={10}
              value={this.state.verticalSizeValue}
              onChange={this.updateVerticalSizeValue}
            />{" "}
          </li>{" "}
        </ul>{" "}
      </SizeControlsStyles>
    );
  }
}
