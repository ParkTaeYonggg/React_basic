import React from "react";
import FindId from "./findId";
import FindPw from "./findPw";
import LoginBtnBar from "./loginBtnBar";
import LoginModal from "./loginModal";
import Signup from "./signup";

class SubmitChk extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            userMenu: "로그인",
        };
    }
     // 클릭시 스테이트 변경
     stateUpdate = (e) => {
        let barStatus = e.target.innerHTML;
        if (barStatus === "회원가입") {
            this.setState({userMenu: "회원가입"});
        } else if (barStatus === "아이디찾기") {
            this.setState({userMenu: "아이디찾기"});
        } else if (barStatus === "비번찾기") {
            this.setState({userMenu: "비번찾기"});
        } else if (barStatus === "로그인") {
            this.setState({userMenu: "로그인"});
        }
    }
   

    render() {
        return (
            <>
                <div className="loginModal">
                    <div className="frm_tag">
                        {this.state.userMenu === "로그인" ? <LoginModal userMenu={this.state.userMenu} /> : null}
                        {this.state.userMenu === "회원가입" ? <Signup userMenu={this.state.userMenu} /> : null}
                        {this.state.userMenu === "비번찾기" ? <FindPw /> : null}
                        {this.state.userMenu === "아이디찾기" ? <FindId /> : null}
                        <div className="login_btn_div" onClick={this.stateUpdate}>
                            <LoginBtnBar val={this.state.userMenu} />
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
}

export default SubmitChk;