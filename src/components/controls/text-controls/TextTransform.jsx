import React, { Component } from 'react'

export default class TextTransform extends Component {
    handleChange = e => {
        let key = e.target.getAttribute("data-key");
        let newValue = e.target.value;
        this.props.updateMyButton(key, newValue);
    };
    render() {
        return (
            <div className="control_item text_transform">
                <input
                    type="radio"
                    name="text_transform"
                    id="uppercase"
                    value="uppercase"
                    data-key="textTransform"
                    onChange={this.handleChange}
                />
                <label htmlFor="uppercase" className="clickable">
                    TT
              </label>
                <input
                    type="radio"
                    name="text_transform"
                    id="capitalize"
                    value="capitalize"
                    data-key="textTransform"
                    onChange={this.handleChange}
                />
                <label htmlFor="capitalize" className="clickable">
                    Tt
              </label>
                <input
                    type="radio"
                    name="text_transform"
                    id="lowercase"
                    value="lowercase"
                    data-key="textTransform"
                    onChange={this.handleChange}
                />
                <label htmlFor="lowercase" className="clickable">
                    tt
              </label>
            </div>
        )
    }
}
