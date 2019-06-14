import React, { Component } from "react";
import "./App.css";
import Controls from "./components/controls/Controls";
import Result from "./components/result/Result";
import Presets from "./components/presets/Presets";

export default class App extends Component {
  state = {
    buttonText: "Default text",
    fontFamily: "Arial",
    fontSize: 18,
    bold: false,
    italic: false,
    textTransform: ""
  };

  changeButtonInfo = async (key, newValue) => {
    await this.setState({ [key]: newValue });
    // console.log(newValue);
  };

  render() {
    return (
      <div className="app">
        <Controls changeButtonInfo={this.changeButtonInfo} />
        <Result
          buttonText={this.state.buttonText}
          fontFamily={this.state.fontFamily}
          fontSize={this.state.fontSize}
          bold={this.state.bold}
          italic={this.state.italic}
          textTransform={this.state.textTransform}
        />
        <Presets />
      </div>
    );
  }
}
