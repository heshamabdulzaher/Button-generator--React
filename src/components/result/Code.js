import React, { Component } from "react";
import styled from "styled-components";

const CodeStyles = styled.section`
  background-color: var(--darkBG);
  .code {
    padding: 20px;
    padding-right: 100px;
    color: #eee;
    .line_of_code {
      height: 24px;
      line-height: 24px;
      span {
        color: #d19a66;
        &.selector {
          color: #e06c75;
        }
      }
    }
  }
  .sexy_section_word {
    right: 0;
  }
`;

const translateCSSProperties = {
  fontFamily: "font-family",
  fontSize: "font-size",
  fontWeight: "font-weight",
  fontStyle: "font-style",
  textTransform: "text-transform",
  backgroundColor: "background-color"
};

export default class Code extends Component {
  render() {
    const buttonStyles = [];
    for (let key in this.props.handleButtonCss()) {
      buttonStyles.push({
        property: key,
        value: this.props.handleButtonCss()[key]
      });
    }

    const buttonStylesElements = buttonStyles.map((line, i) => {
      return (
        <div className="line_of_code" key={i}>
          &nbsp;{" "}
          {translateCSSProperties[line.property]
            ? translateCSSProperties[line.property]
            : line.property}
          : <span>{line.value}</span>;
        </div>
      );
    });

    return (
      <CodeStyles>
        <div className="code">
          <div className="line_of_code">
            <span className="selector">button </span>
            {"{"}
          </div>
          {buttonStylesElements}
          <div className="line_of_code">{"}"}</div>
        </div>

        <div className="sexy_section_word">
          <span>Code</span>
        </div>
      </CodeStyles>
    );
  }
}
