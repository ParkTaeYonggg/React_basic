import React from "react";
import { HeaderLine } from "./common/theme";
import LoginBtn from "./header/login/LoginBtn";


function MainPage (props) {
    return (
        <>
            <HeaderLine>
                <div>로고</div>
                <LoginBtn />
            </HeaderLine>            
        </>
    );
}

export default MainPage;