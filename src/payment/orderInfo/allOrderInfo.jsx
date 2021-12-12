import React from "react";
import styled from "styled-components";

export default function AllOrderInfo () {
    return (
    <>
        <div>결제정보</div>
        <OrderInfoWrapper>
            <div>상품명 : 공작의 날개</div>
            <div>상품사진 : <br/><OrderImg src="../../imgs/tempImg6.png"/></div>
            <div>상품정보 : 2021년 마스터피스 top 3 of 10</div>
            <div>상품가격 : 9,000,000,000원</div>
            <div>수량 : 1개</div>
        </OrderInfoWrapper>
    </>
    );
}

const OrderInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    width: 100%;
    height: 100%;
    font-size: 13px;
    color: #787878;
`;
const OrderImg = styled.img`
    width: 30%;
`;