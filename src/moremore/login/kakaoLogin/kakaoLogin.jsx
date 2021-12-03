import React, {useState} from "react";
import { useHistory } from "react-router";
import "./kakaoLogin.css";

const {Kakao} = window;

function KakaoLogin () {
    // const [isLogin, setIsLogin] = useState(false);
    const history = useHistory();
    const LoginStatuss = () => {
        try {
            Kakao.Auth.login({
                success: res => {
                    let result = Kakao.API.request({
                        url : "/v2/user/me"
                    });
                    console.log(result.properties);
                    console.log(result);
                    window.sessionStorage.setItem("id", "카카오");
                    history.push("/");
                },
                fail: error => {
                    alert("카카오 로그인 실패\n관리자에게 문의하세요. (" + error + ")");
                }
            });
        } catch (error) {
            alert("관리자에게 문의하세요. \n" + error);
        }
    }
    const ButtonWrap = () => {return <div className="kakao_btn" onClick={LoginStatuss}></div>;}
    return (
            <ButtonWrap />
    );
}

export default KakaoLogin;