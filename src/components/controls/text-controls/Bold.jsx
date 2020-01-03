import React, { Component } from "react";

export default class Bold extends Component {
    handleChange = e => {
        let key = e.target.getAttribute("data-key");
        let newValue;
        if (e.target.checked) {
            newValue = "bold"
        } else {
            newValue = "normal"
        }
        this.props.updateMyButton(key, newValue);
    };
    render() {
        return (
            <div className="control_item bold">
                <input
                    type="checkbox"
                    id="bold"
                    data-key="fontWeight"
                    onChange={this.handleChange}
                />
                <label htmlFor="bold" className="clickable">
                    <b>B</b>
                </label>
            </div>
        );
    }
}
