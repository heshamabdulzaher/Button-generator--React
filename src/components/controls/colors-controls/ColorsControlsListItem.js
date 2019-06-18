import React, { Component } from 'react'
import ColorPicker from '../../shared/ColorPicker';

export default class ColorsControlsListItem extends Component {
    render() {
        return (
            <li>
                <span>{this.props.text}</span>
                <ColorPicker
                    myKeyIs={this.props.myKeyIs}
                    myValueIs={this.props.myValueIs}
                    updateMyButton={this.props.updateMyButton}
                />
            </li>
        )
    }
}
