import React from "react";
import styled from "styled-components";
import MyHouseItemsContainer from "./myHouseItemsContainer";

export default function MyHouseItemModal ({ onClick }) {
    return (
        <ContainerSize>
            <TopBar><XBtn onClick={onClick}>x</XBtn></TopBar>
            <MyHouseItemsContainer/>
        </ContainerSize>
    );
}


export const ContainerSize = styled.div`
    width: 478px;
    display: grid;
    grid-template-rows: 10% 90%;
    grid-row-gap: 6px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;

    animation-name slideUp;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-timing-function: ease-out;

    @keyframes slideUp {
        from {
            top: 100%;
        };
        to {
            top: 0%;
        };
    }
`;

export const TopBar = styled.div`
    width: 98%;
    min-height: 26.69px;
    background-color: #787878;
    text-align: right;
    padding-right: 10px;
    font-size: 20px;
`;
export const XBtn = styled.span`
    cursor: pointer;
`;