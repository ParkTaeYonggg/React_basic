import React, { Fragment } from "react";
import "./loginModal.css";
import InputTag from "./loginCommon/InputTag";
import KakaoLogin from "./kakaoLogin/kakaoLogin";
import UseAxios from "../common/useAxios";

class GoLogin extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: "",
            pw: "",
            loginSrc: "",
        };
        this.handlePwChk = this.handlePwChk.bind(this);
        
    }

    // 인풋태그 작성에 필요한 함수들
    handleIdChk = (e) => {
        this.setState({
            id: e.target.value,
        });
    }
    handlePwChk (e) {
        this.setState({
            pw: e.target.value,
        });
    }
    //////////////////////////
     // 서브밋 핸들러
     handleSubmit = (e) => {
        e.preventDefault();
    }
     // 로그인 체크
     LoginConfirm = (e) => {
        // 로그인 화면이 출력되어 있을 때
        let fetchedData = new UseAxios(`http://localhost:8080/idPwChk/chk/controller?id=${this.state.id}&pw=${this.state.pw}`);
        console.log(fetchedData);

        if (this.state.id === "user" && this.state.pw === "user") {
            alert("반갑슴다.");
            this.loginSuccess();
            const frmData = new FormData(e.target.parentNode);
            
        } else if (this.inputRefId.value.trim() === "") {
            alert("아이디를 입력해주세요.");
            this.inputRefId.focus();
        } else if (this.inputRefPw.value.trim() === "") {
            alert("비밀번호를 입력해주세요.");
            this.inputRefPw.focus();
        } else {
            alert("없는 계정이거나 비밀번호가 일치하지 않습니다.");
            this.setState({
                id: "",
                pw: "",
            });
        }
        
    }
    ////////////////////////
        // 세션등록을 위한 함수
        loginSuccess = () => {
            window.sessionStorage.setItem("id", "박감자");
            document.location.href="/";
        }
        inputRefId;
        inputRefPw;
        TargetingId = (e) => {this.inputRefId = e;}
        TargetingPw = (e) => {this.inputRefPw = e;}
    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <InputTag type="id" value={this.state.id} onChange={this.handleIdChk} Ref={this.TargetingId} />
                    <InputTag type="pw" value={this.state.pw} onChange={this.handlePwChk} Ref={this.TargetingPw} />
                    <button onClick={this.LoginConfirm}>로그인</button>
                    <KakaoLogin />
                </form>
            </Fragment>
        );
    }
}

export default GoLogin;