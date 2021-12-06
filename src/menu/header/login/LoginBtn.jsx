import React, {useState} from "react";
import styled from "styled-components";
import ExportLoginModal from "./LoginModal";



function LoginBtn() {
    const [isToggle, setIsToggle] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);

    // callback : fn
    const callback = (e) => {
        setLoginStatus(e);
    }
    const handleModal = () => {
        setIsToggle(!isToggle);
    }
    return (
        <>
            {loginStatus ? <StyledLogin>박감자</StyledLogin>: <StyledLogin onClick={handleModal}>로그인</StyledLogin>}
            {isToggle && !loginStatus ? <ExportLoginModal onClick={handleModal} callback={callback}/> : null}
        </>
    );
}

export default LoginBtn;



const StyledLogin = styled.div`
    border: 1px solid #787878;
    font-size: 20px;
    background-color: inherit;
    color: #787878;
    text-align: center;
    border-radius: 30px;
    width: 100px;
    height: 80%;
    line-height: 40px;
    cursor: pointer;
`;

