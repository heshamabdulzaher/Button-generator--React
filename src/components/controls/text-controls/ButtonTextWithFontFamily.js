import React, { Component } from "react";

export default class ButtonTextWithFontFamily extends Component {

    handleChange = e => {
        let key = e.target.getAttribute("data-key");
        let newValue = e.target.value;
        this.props.updateMyButton(key, newValue);
    };
    render() {
        return (
            <div className="control_item text">
                <input
                    type="text"
                    className="button_text"
                    placeholder="Default text"
                    data-key="buttonText"
                    onChange={this.handleChange}
                />
                <select
                    className="default_value clickable"
                    data-key="fontFamily"
                    onChange={this.handleChange}
                >
                    <option>Arial</option>
                    <option>fantasy</option>
                    <option>cursive</option>
                    <option>monospace</option>
                </select>
                <svg width="12.118" height="6.039" viewBox="0 0 12.118 6.039">
                    <path
                        d="M0,96.879l6.059,6.039,6.059-6.039Z"
                        transform="translate(0 -96.879)"
                        fill="#333842"
                    />
                </svg>
            </div>
        );
    }
}
