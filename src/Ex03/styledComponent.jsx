import React from "react";
import styled, {css} from "styled-components";
import Theme, {FontTheme} from "./theme";

export const Container = styled.div`
    ${Theme.desktop} {
        width: 100px;
        height: 100px;
        border: 1px solid red;
        background-color: ${props => props.color}
    };
    ${Theme.tablet} {
        width: 80px;
        height: 80px;
        border: 1px solid blue;
        background-color: ${props => props.color}
    };
    ${Theme.mobile} {
        width: 40px;
        height: 40px;
        border: 1px solid black;
        background-color: ${props => props.color}
    }
    span {
        font-size: 13px;
        color: #787878;
    }
    `;

function ContentContainer () {
    return <Container />;
}

export default ContentContainer;