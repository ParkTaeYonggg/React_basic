import React from "react";
import styled from "styled-components";
import KakaoImg from "./kakao_img/kakao_login_small.png";


const kakao_api = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=44b87352c8fc4301a07f8f05b18cf35c&redirect_uri=http://localhost:3000/login/kakao";
const HandlerKakaoLogin = () => {window.location.assign(kakao_api);}

export default function KakaoLogin () {
    return <Kakao_btn onClick={HandlerKakaoLogin}>로그인</Kakao_btn>;
}

const Kakao_btn = styled.div`
    background-image: url(${KakaoImg});
    background-repeat: no-repeat;
    display: inline-block;
    color: transparent;
    cursor: pointer;
    width: 60px;
    height: 30px;
`;