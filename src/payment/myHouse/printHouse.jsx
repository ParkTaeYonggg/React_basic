import React from "react";
import styled from "styled-components";

// 임시로 데이터를 만들어 둔 공간임.
// 실제로는 컨트롤러에 데이터를 연동할 것임.
// 지금은 결제 API를 연습하기 위해 기본 틀만 만든 것임.
export default function PrintHouse ({selectedData}) {
    return selectedData === 1 ? <Data1/> : <Data2/>;
}

const Data1 = () => {
    return (
        <InsertedMyHouses>
            <div>배송지명</div>
            <InnerDiv>
                <div>수령인</div>
                <div>연락처 : 010-999-9999</div>
            </InnerDiv>
            <div>주소 : 서울시 도봉구 도봉대로 46길 16</div>    
        </InsertedMyHouses>
    );
}
const Data2 = () => {
    return (
        <InsertedMyHouses>
            <div>배송지명</div>
                <InnerDiv>
                    <div>수령인 : 누군가?</div>
                    <div>010-999-9999</div>
                </InnerDiv>
            <div>주소 : 서울시 강남구 강낭대로 56길 17</div>
        </InsertedMyHouses>
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