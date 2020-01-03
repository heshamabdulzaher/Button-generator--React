import React, { Component } from "react";

export default class Italic extends Component {
    handleChange = e => {
        let key = e.target.getAttribute("data-key");
        let newValue;
        if (e.target.checked) {
            newValue = "italic"
        } else {
            newValue = "normal"
        }
        this.props.updateMyButton(key, newValue);
    };
    render() {
        return (
            <div className="control_item italic">
                <input
                    type="checkbox"
                    id="italic"
                    data-key="fontStyle"
                    onChange={this.handleChange}
                />
                <label htmlFor="italic" className="clickable">
                    <em>I</em>
                </label>
            </div>
        );
    }
}
