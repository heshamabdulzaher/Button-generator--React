import React, { Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

export default class SizeControlsListItem extends Component {
  state = {
    value: 0
  };

  componentWillMount() {
    this.setState({ value: this.props.value });
  }

  handleChange = newValue => {
    this.setState({ value: newValue });
    // this.props.updateMyButton(key, newValue);
  };

  render() {
    return (
      <li>
        <div className="text">
          {this.props.text}
          <span> {this.state.value}px</span>
        </div>
        <InputRange
          maxValue={50}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      </li>
    );
  }
}
