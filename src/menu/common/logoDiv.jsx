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
        width: 72px;
        background-size: 72px 40px;
        padding-top: 3px;
    }
`;