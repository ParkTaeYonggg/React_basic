import React from "react";
import styled from "styled-components";
import KakaoImg from "./kakao_img/kakao_login_small.png";


export default function KakaoLogin () {
    return <Kakao_btn>로그인</Kakao_btn>;
}

const Kakao_btn = styled.div`
    background-image: url(${KakaoImg});
    background-repeat: no-repeat;
    display: inline-block;
    color: transparent;
    z-index: 1;
    cursor: pointer;
    width: 60px;
    height: 30px;
`;