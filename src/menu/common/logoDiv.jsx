import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import logo from "../common/tempImg1.png";

export default function LogoDiv () {
    return <StyledLink to="/" />
}

const StyledLink = styled(Link)`
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: 70px; 40px;
    width: 70px;
    height: 40px;
    border-radius: 40%;
    &:hover{
        animation-name: sizeUp;
        animation-duration: 0.7s;
        animation-fill-mode: both;
        animation-timing-function: ease-out;
    }

    @keyframes sizeUp {
        to {
            width: 72px;
            padding-top: 3px;
            background-size: 72px 40px;
        }
    }
`;