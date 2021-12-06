import React from "react";
import styled from "styled-components";


export default function SubmitLoginBtn () {

    return (
        <StyledLoginBtn>로그인</StyledLoginBtn>
    );
}


const StyledLoginBtn = styled.button`
    width: 100%;
    color: #787878;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid #787878;
    border-radius: 15px;
    text-align: center;
`;