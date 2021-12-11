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


const ContainerSize = styled.div`
    width: 478px;
    display: grid;
    grid-template-rows: 10% 90%;
    border-radius: 15px;
    overflow: hidden;
`;

const TopBar = styled.div`
    width: 98%;
    background-color: #787878;
    text-align: right;
    padding-right: 10px;
    font-size: 20px;
`;
const XBtn = styled.span`
    cursor: pointer;
`;