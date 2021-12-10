import React from "react";
import styled from "styled-components";
import StyledInputTag from "../../common/styledInput";
import { VerticalContent, gridContenVertical } from "../../common/theme";
import UseAxios from "../../common/useAxios";
import KakaoLogin from "./kakaoLogin";
import NaverLogin from "./naverLogin";
import SubmitLoginBtn from "./submitLoginBtn";

export default class ExportLoginModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: "",
            pw: "",
        };
    }
    // eventHandler : value
    handlerValue = (type,e) => {this.setState({[type]: e.target.value});}

    // eventHandler : ref
    inputRefId;
    inputRefPw;
    handlerRefId = (e) => {this.inputRefId = e};
    handlerRefPw = (e) => {this.inputRefPw = e};

    // eventHandler : submit
    handlerSubmit = (e) => {
        e.preventDefault();
        UseAxios(`/api/login/id?id=${this.state.id}&pw=${this.state.pw}`,this.callback);
    }

    // callback : fn
    callback = (e) => {
        if (e) {
            alert("환영합니다.");
            this.props.onClick();
            window.sessionStorage.setItem("nickname", "박감자");
            this.props.callback(e);
        } else {
            alert("회원정보가 일치하지 않습니다.");
        }
    }

    render() {
        return (
            <LoginModal_size>
                <form onSubmit={this.handlerSubmit}>
                <LoginModal>
                    <CloseBtn onClick={this.props.onClick}>X</CloseBtn>
                    <StyledInputTag type="text"
                                    name="id"
                                    value={this.state.id}
                                    onChange={(e) => this.handlerValue("id",e)}
                                    Ref={this.handlerRefId}
                                    ph="아이디를 입력해주세요."/>

                    <StyledInputTag type="password"
                                    name="pw"
                                    value={this.state.pw}
                                    onChange={e => this.handlerValue("pw",e)}
                                    Ref={this.handlerRefPw}
                                    ph="암호를 입력해주세요."/>
                    <SubmitLoginBtn />
                    <div><KakaoLogin /><NaverLogin /></div>
                </LoginModal>
                </form>
            </LoginModal_size>
            
        );
    }
}





const LoginModal_size = styled(VerticalContent)`
position: absolute;
height: 500px;
width: 100%;
height: 610px;
right: 0px;
top: 60px;
z-index: 1;
`;

const LoginModal = styled(gridContenVertical)`
border: 1px solid #787878;
border-radius: 5px;
width: 400px;
height: 500px;
background-color: white;
`;

const CloseBtn = styled.div`
    position: relative;
    left: 240px;
    top: -30px;
    color: #787878;
    font-size: 30px;
    cursor: pointer;
`;