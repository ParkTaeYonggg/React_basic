import React, {useState} from "react";
import styled from "styled-components";
import {ContainerSize, TopBar, XBtn} from "./myHouseModal/myHouseItemModal";
import { FullSize } from "./myHouseTopBar";
export default function MyHouseInfo ({data, callback, handlerToggle, callbackData}) {
    const [target, setTarget] = useState();
    // 데이터 중 선택된 주소지 번호를 가진 데이터를 노출시킨다.

    const handlerColorSwitch = (e) => {
        setTarget(e);
        // 저장을 누르면 타겟을 보내 주소지 업데이트 시키자.
    }
    //  선택 핸들러
    const handlerChoice = () => {
        callbackData(target);
        handlerToggle();
    }
    return (
        <FullSize>
            <ContainerSize>
                <TopBar><XBtn onClick={handlerToggle}>x</XBtn></TopBar>
                <div>
                <InsertedMyHouses onClick={() => handlerColorSwitch(1)} chk={target === 1}>
                    <div>배송지명</div>
                    <InnerDiv>
                        <div>수령인</div>
                        <div>연락처 : 010-999-9999</div>
                    </InnerDiv>
                    <div>주소 : 서울시 도봉구 도봉대로 46길 16</div>
                </InsertedMyHouses>
                <InsertedMyHouses onClick={() => handlerColorSwitch(2)} chk={target === 2}>
                    <div>배송지명</div>
                    <InnerDiv>
                        <div>수령인 : 누군가?</div>
                        <div>010-999-9999</div>
                    </InnerDiv>
                    <div>주소 : 서울시 강남구 강낭대로 56길 17</div>
                </InsertedMyHouses>
                <InnerDiv>
                    <span onClick={handlerChoice}>선택</span>
                    <span>취소</span>
                </InnerDiv>
                </div>
            </ContainerSize>
        </FullSize>
    );
}

const InsertedMyHouses = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    font-size: 13px;
    color: #787878;
    padding-left: 10px;
    cursor: pointer;
    margin: 3px 0px 3px 0px;
    background-color: ${props => props.chk ? "#dcdcdc" : "white"};
    &:hover {
        background-color: #dcdcdc;
    }
`;

const InnerDiv = styled.div`
    display: grid;
    grid-template-columns: 47% 47%;

    span {
        margin-top: 5px;
        text-align: center;
    }
`;