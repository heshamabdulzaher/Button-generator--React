import React, { Component } from "react";
import "./App.css";
import Controlls from "./components/Controlls";
import Result from "./components/Result";

export default class App extends Component {
  state = {
    buttonText: "Default text",
    fontFamily: "Arial"
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     button: {
  //       text: "Default text",
  //       fontFamily: "Arial"
  //     }
  //   };
  // }

  changeButtonInfo = async (key, newValue) => {
    await this.setState({ [key]: newValue });
  };

  render() {
    return (
      <div className="app">
        <Controlls
          button={this.state.button}
          changeButtonInfo={this.changeButtonInfo}
        />
        <Result
          buttonText={this.state.buttonText}
          fontFamily={this.state.fontFamily}
        />
      </div>
    );
  }
}
