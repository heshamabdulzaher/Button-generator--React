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

export default class OuterCode extends Component {
  render() {
    return (
      <CodeStyles>
        <div className="code">
          <div className="line_of_code">
            <span className="selector">button </span>
            {"{"}
          </div>
          {/* font-family */}
          <div className="line_of_code">
            &nbsp; font-family: <span>{this.props.fontFamily}</span>;
          </div>
          {/* font-size */}
          <div className="line_of_code">
            &nbsp; font-size: <span>{this.props.fontSize}px</span>;
          </div>
          {/* font-weight */}
          <div className="line_of_code">
            &nbsp; font-weight: <span>{this.props.bold ? "bold" : 500}</span>;
          </div>
          {/* font-style */}
          {this.props.italic && (
            <div className="line_of_code">
              &nbsp; font-style: <span>italic</span>;
            </div>
          )}
          {/* text-transform */}
          {this.props.textTransform && (
            <div className="line_of_code">
              &nbsp; text-transform: <span>{this.props.textTransform}</span>;
            </div>
          )}
          {/* background-color */}
          <div className="line_of_code">
            &nbsp; background-color:
            <span>
              {` rgba(${this.props.backgroundColorRGBA.r}, ${
                this.props.backgroundColorRGBA.g
              }, ${this.props.backgroundColorRGBA.b}, ${
                this.props.backgroundColorRGBA.a
              })`}
            </span>
            ;
          </div>
          {/* color */}
          <div className="line_of_code">
            &nbsp; color:
            <span>
              {` rgba(${this.props.colorRGBA.r}, ${this.props.colorRGBA.g}, ${
                this.props.colorRGBA.b
              }, ${this.props.colorRGBA.a})`}
            </span>
            ;
          </div>
          <div className="line_of_code">{"}"}</div>
        </div>

        <div className="sexy_section_word">
          <span>Code</span>
        </div>
      </CodeStyles>
    );
  }
}
