import React, { Component } from "react";
import "./App.css";
import Controls from "./components/controls/Controls";
import Result from "./components/result/Result";

export default class App extends Component {
  state = {
    buttonText: "Default text",
    fontFamily: "Arial"
  };

  changeButtonInfo = async (key, newValue) => {
    await this.setState({ [key]: newValue });
  };

  render() {
    return (
      <div className="app">
        <Controls
          button={this.state.button}
          changeButtonInfo={this.changeButtonInfo}
        />
        {/* <Result
          buttonText={this.state.buttonText}
          fontFamily={this.state.fontFamily}
        /> */}
      </div>
    );
  }
}
