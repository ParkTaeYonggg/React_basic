import React, {useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function KakaoCode () { 
    const history = useHistory();
    const code = new URL(window.location.href);

    useEffect(() => {
        axios.post("/api/login/kakao", {code})
        .then(res => {
            console.log(res.data);
            history.push("/");
        })
        .catch(error => {
            alert("관리자에게 문의하세요. (kakao_login : " + error + ")");
            history.push("/");    
        }); 
    });
    return <h1>기다려주세요..</h1>
}