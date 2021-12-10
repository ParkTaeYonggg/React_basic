import React, {useState} from "react";
import styled from "styled-components";
import { StyledLogin } from "./LoginBtn";

const {sessionStorage} = window;
export default function LogoutAfterLogin ({callback}) {

    const handlerClick = (e) => {
        callback(e);
        sessionStorage.removeItem("nickname");
    }
    return (
        <LoginContainer>
            <StyledLogin>{sessionStorage.getItem("nickname")}</StyledLogin>
            <StyledLogin onClick={() => handlerClick(false)}>로그아웃</StyledLogin>
        </LoginContainer>
    );
}

const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`;