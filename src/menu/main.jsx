import React from "react";
import LogoDiv from "./common/logoDiv";
import { HeaderLine } from "./common/theme";
import LoginBtn from "./header/login/LoginBtn";


function MainPage (props) {
    return (
        <>
            <HeaderLine>
                <LogoDiv/>
                <LoginBtn />
            </HeaderLine>            
        </>
    );
}

export default MainPage;