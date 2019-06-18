import React, { Component } from "react";
import "./App.css";
import Controls from "./components/controls/ControlsContainer";
import Result from "./components/result/Result";
import Presets from "./components/presets/Presets";

export default class App extends Component {
  state = {
    // person: {
    //   name: "hesham",
    //   age: 23
    // },
    buttonText: "Default text",
    fontFamily: "Arial",
    fontSize: 18,
    bold: false,
    italic: false,
    textTransform: "",
    backgroundColorRGBA: {
      r: "40",
      g: "9",
      b: "74",
      a: "1"
    },
    colorRGBA: {
      r: "255",
      g: "255",
      b: "255",
      a: "1"
    }
  };

  updateMyButton = async (key, newValue) => {
    await this.setState({ [key]: newValue });
  };
  // test = async (key, newValue) => {
  //   let updatedPerson = { ...this.state.person };
  //   updatedPerson[key] = newValue;
  //   await this.setState({ person: updatedPerson });
  // };

  render() {
    return (
      <div className="app">
        <Controls
          updateMyButton={this.updateMyButton}
          backgroundColorRGBA={this.state.backgroundColorRGBA}
          colorRGBA={this.state.colorRGBA}
        />
        <Result
          buttonText={this.state.buttonText}
          fontFamily={this.state.fontFamily}
          fontSize={this.state.fontSize}
          bold={this.state.bold}
          italic={this.state.italic}
          textTransform={this.state.textTransform}
          backgroundColorRGBA={this.state.backgroundColorRGBA}
          colorRGBA={this.state.colorRGBA}
        />
        <Presets />
      </div>
    );
  }
}
