import React, { Component } from "react";

export default class FontSize extends Component {

    state = {
        fontSizeValue: 18
    };

    updateFontSizeValue = e => {
        let newFontSizeValue = this.state.fontSizeValue;
        if (e.key === "ArrowUp" && newFontSizeValue < 50) {
            newFontSizeValue++;
        } else if (e.key === "ArrowDown" && newFontSizeValue > 14) {
            newFontSizeValue--;
        }
        this.setState({ fontSizeValue: newFontSizeValue });
    };

    handleChange = e => {
        let key = e.target.getAttribute("data-key");
        let newValue = this.state.fontSizeValue;
        this.setState({ fontSizeValue: newValue });
        this.props.updateMyButton(key, newValue);
    };

    render() {
        return (
            <div className="control_item font_size">
                <input
                    type="number"
                    value={this.state.fontSizeValue}
                    data-key="fontSize"
                    onKeyDown={this.updateFontSizeValue}
                    onChange={this.handleChange}
                />
                <div className="default_value">px</div>
            </div>
        );
    }
}
