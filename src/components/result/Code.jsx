import React, { Component } from "react";
import styled from "styled-components";

const CodeStyles = styled.section`
  background-color: var(--darkBG);
  .code {
    padding: 20px 100px 20px 50px;
    color: #eee;
    position: relative;
    min-height: 300px;
    &::before {
      content: "";
      background-color: rgba(68, 103, 173, 0.08);
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 100%;
    }
    .line_of_code {
      height: 25px;
      line-height: 25px;
      .css-value {
        color: #d19a66;
      }
      .selector {
        color: #e06c75;
      }
      .count-lines {
        position: absolute;
        left: 0;
        width: 40px;
        text-align: center;
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

    return (
      <CodeStyles>
        <div className="code">
          <div className="line_of_code">
            <span className="count-lines">{1}</span>
            <span className="selector">button </span>
            {"{"}
          </div>
          {buttonStyles.map((line, i) => {
            return (
              <div className="line_of_code" key={i}>
                &nbsp;
                <span className="count-lines">{i + 2}</span>
                {translateCSSProperties[line.property]
                  ? translateCSSProperties[line.property]
                  : line.property}
                : <span className="css-value">{line.value}</span>;
              </div>
            );
          })}
          <div className="line_of_code">
            <span className="count-lines">{buttonStyles.length + 2}</span>
            {"}"}
          </div>
        </div>

        <div className="sexy_section_word">
          <span>Code</span>
        </div>
      </CodeStyles>
    );
  }
}
