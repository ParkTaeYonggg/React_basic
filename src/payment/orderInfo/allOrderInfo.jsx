import React from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {CountUp, CountDown} from "../../reduxExample/reduxExample2/prRedux";
import PropTypes from "prop-types";

AllOrderInfo.prototype = {
    action : PropTypes.arrayOf(PropTypes.any)
}
export default function AllOrderInfo () {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()


    const HandlerCount = () => {
        return (
            <>
                <button onClick={() => dispatch(CountUp(count))}>+</button>
                <button onClick={() => dispatch(CountDown(count))}>-</button>
            </>
        );
    }
    return (
    <>
        <div>결제정보</div>
        <OrderInfoWrapper>
            <div>상품명 : 공작의 날개</div>
            <div>상품사진 : <br/><OrderImg src="../../imgs/tempImg6.png"/></div>
            <div>상품정보 : 2021년 마스터피스 top 3 of 10</div>
            <div>상품가격 : 9,000,000,000원</div>
            <div>수량 : {count}개<HandlerCount/></div>
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