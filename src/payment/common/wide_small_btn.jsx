import React from "react";
import styled from "styled-components";

export const WideButton = styled.div`
    width: 100%;
    height: 90%;
    background-color: #787878;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    line-height: 50px;

    &:hover {
        animation-name: btnUp;
        animation-fill-mode: both;
        animation-timing-function: ease-out;
        animation-duration: 0.7s; 
    }

    &:active {
        animation-name: btnClick;
        animation-duration: 1s;
        animation-timing-function: ease-in;
        animation-fill-mode: both;
    }

    @keyframes btnUp {
        from {
            background-color: #787878;
        };
        to {
            background-color: #dcdcdc;
        };
    }
    @keyframes btnClick {
        to {
            background-color: black;
            color: white;
        };
    }
`;

