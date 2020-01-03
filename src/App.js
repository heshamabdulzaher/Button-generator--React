import React, { Component } from "react";
import "./App.css";
import ControlsContainer from "./components/controls/ControlsContainer";
import Result from "./components/result/Result";

export default class App extends Component {
  state = {
    button: {
      buttonText: "Default text",
      fontFamily: "Arial",
      fontSize: "18px",
      fontWeight: "normal",
      fontStyle: "normal",
      textTransform: "none",
      backgroundColor: {
        r: "40",
        g: "9",
        b: "74",
        a: "1"
      },
      color: {
        r: "255",
        g: "255",
        b: "255",
        a: "1"
      },
      padding: "10px 20px"
    }
  };

  updateMyButton = async (key, newValue) => {
    let buttonUpdated = { ...this.state.button };
    buttonUpdated[key] = newValue;
    await this.setState({ button: buttonUpdated });
  };

  render() {
    return (
      <div className="app">
        <ControlsContainer
          button={this.state.button}
          updateMyButton={this.updateMyButton}
        />
        <Result button={this.state.button} />
        {/* <Result
          buttonText={this.state.buttonText}
          fontFamily={this.state.fontFamily}
          fontSize={this.state.fontSize}
          bold={this.state.bold}
          italic={this.state.italic}
          textTransform={this.state.textTransform}
          backgroundColorRGBA={this.state.backgroundColorRGBA}
          colorRGBA={this.state.colorRGBA}
        />
        <Presets /> */}
      </div>
    );
  }
}
