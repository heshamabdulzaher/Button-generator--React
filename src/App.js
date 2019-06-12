import React, { Component } from "react";
import "./App.css";
import Controlls from "./components/Controlls";
import Result from "./components/Result";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: { text: "Default text" }
    };
  }

  changeButtonInfo = (key, newValue) => {
    this.setState({
      button: {
        [key]: newValue
      }
    });
    console.log(this.state.button[key]);
  };

  render() {
    return (
      <div className="app">
        <Controlls
          button={this.state.button}
          changeButtonInfo={this.changeButtonInfo}
        />
        <Result button={this.state.button} />
      </div>
    );
  }
}
