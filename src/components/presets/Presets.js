import React, { Component } from 'react'
import styled from "styled-components";

const PresetsStyle = styled.section`
    background-color: #fff;
`;

export default class Presets extends Component {
    render() {
        return (
            <PresetsStyle>
                Presets
            </PresetsStyle>
        )
    }
}
