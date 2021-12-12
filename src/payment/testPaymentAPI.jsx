import React, {useState} from "react";
import styled from "styled-components";
import {WideButton} from "./common/wide_small_btn";
import UseAxios from "./common/useAxios";
const {IMP} = window;

export default function TestPaymentAPI () {
    const [data, setData] = useState("");
    const callback = (e) => {
        setData(e);
    }
    // IMP.request_pay(param, res);
    const SendMoney = () => {
        IMP.init("imp05287248");
        IMP.request_pay({
            // pg사 명
            pg: "html5_inicis",
            pay_method: "card",
            // 리다이렉트 주소로 날아가는 데이터 중 하나 (나머지는 imp_uid임)
            merchant_uid: "TEST_" + new Date().getTime(),
            // 실제론 데이터를 넣어줄 자리 (지금은 임시)
            name: "공작의 날개",
            amount: 1,
            buyer_email: "test@test.com",
            buyer_name: "박감자",
            buyer_tel: "010-999-9999",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "495467",
            // 모바일에선 이것이 필요함.
            // m_redirect_url : '나의 유알엘'
        },
        res => {
            if (res.success) {
                // UseAxios("/api/payment/money?imp_uid" + res.imp_uid + "&merchant_uid=" + res.merchant_uid, callback, "post");
                // 결제성공시 구현목록임.
                alert("결제 성공~!");
            } else {
                alert("결제실패~! 관리자 문의는 - 02-9999-9999 - ");
            }
        });
    }
    return (
        <WideButton onClick={SendMoney}>결제하기</WideButton>
    );
}

