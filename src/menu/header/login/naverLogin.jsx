import React, {useEffect} from "react";
import styled from "styled-components";

export default function NaverLogin () {
 
    useEffect(() => {
        var naver_id_login = new window.naver_id_login("pmvvBqZAst0kcrdYqgIL", "http://localhost:3000/login/naver");
        var state = naver_id_login.getUniqState();
        naver_id_login.setButton("green", 2,30);
        naver_id_login.setDomain("http://localhost:3000");
        naver_id_login.setState(state);
        // naver_id_login.setPopup(false);
        naver_id_login.init_naver_id_login();
    });
    
    return <NaverLoginDivSize id="naver_id_login"></NaverLoginDivSize>;
}

const NaverLoginDivSize = styled.div`
    float: left;
    img {
        width: 60px;
    }
`;
