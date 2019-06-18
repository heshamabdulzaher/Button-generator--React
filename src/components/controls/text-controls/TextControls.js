import React, { Component } from "react";
import styled from "styled-components";
import ButtonTextWithFontFamily from './ButtonTextWithFontFamily';
import FontSize from './FontSize';
import Bold from './Bold';
import Italic from './Italic';
import TextTransform from './TextTransform';

export const TextControlsStyle = styled.section`
  .controls_container {
      display: grid;
      grid-template-rows: 40px 40px;
      grid-row-gap: 20px;
      .button_text {
        padding: 0 130px 0 12px;
      }
    .row {
      max-width: 100%;
      &.grid {
        display: grid;
        grid-template-columns: 90px 30px 40px 10px 40px 30px 12px;
      }
      .control_item {
        background-color: #333842;
        border-radius: 3px;
        overflow: hidden;
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 500;
        > input {
          width: 100%;
          height: 100%;
        }
        input:checked + label {
          color: #fff;
          font-weight: 500;
        }
        select {
          padding-right: 30px;
          color: rgba(255, 255, 255, 0.9);
        }
        svg {
          position: absolute;
          top: 50%;
          right: 13px;
          transform: translateY(-50%);
        }
        label {
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 400;
          user-select: none;
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            height: 60%;
            width: 1px;
            background-color: rgba(255, 255, 255, 0.15);
          }
          &:last-of-type::after {
            display: none;
          }
        }
        &.font_size input {
          padding: 0 45px 0 12px;
        }
        &.bold {
          grid-column: 3 / 4;
          justify-content: center;
        }
        &.italic {
          justify-content: center;
          grid-column: 5 / 6;
          font-weight: 500;
          font-size: 18px;
        }
        &.text_transform {
          grid-column: 7 / end;
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;

export default class TextControls extends Component {

  render() {
    return (
      <TextControlsStyle className="controls_group">
        <h3>text</h3>
        <div className="controls_container">
          <div className="row">
            <ButtonTextWithFontFamily updateMyButton={this.props.updateMyButton} />
          </div>
          <div className="row grid">
            <FontSize updateMyButton={this.props.updateMyButton} />
            <Bold updateMyButton={this.props.updateMyButton} />
            <Italic updateMyButton={this.props.updateMyButton} />
            <TextTransform updateMyButton={this.props.updateMyButton} />
          </div>
        </div>
      </TextControlsStyle>
    );
  }
}
