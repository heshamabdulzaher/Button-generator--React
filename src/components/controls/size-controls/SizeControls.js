import React, { Component } from "react";
import styled from "styled-components";
import SizeControlsListItem from "./SizeControlsListItem";

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
  render() {
    return (
      <SizeControlsStyles className="controls_group">
        <h3>size</h3>
        <ul>
          <SizeControlsListItem text="Horizontal size" value={10} />
          <SizeControlsListItem text="Vertical size" value={30} />
        </ul>
      </SizeControlsStyles>
    );
  }
}
