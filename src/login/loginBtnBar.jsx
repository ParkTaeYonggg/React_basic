import React from "react";
const {Component} = React;

class LoginBtnBar extends Component {
    constructor(props) {
        super(props);
    }

    LoginBtn = () => {return <button className="login_btn">로그인</button>}
    SignupBtn = () => {return <button className="login_btn">회원가입</button>}    
    FindIdBtn = () => {return <button className="login_btn">아이디찾기</button>}
    FindPwBtn = () => {return <button className="login_btn">비번찾기</button>}
    EmptyDiv = () => {return <button className="login_btn">more</button>}

    render () {
        return (
            <>
                {this.props.val === "로그인" ? <this.EmptyDiv /> : <this.LoginBtn />}
                {this.props.val === "회원가입" ? <this.EmptyDiv /> : <this.SignupBtn />}
                {this.props.val === "아이디찾기" ? <this.EmptyDiv /> : <this.FindIdBtn /> }
                {this.props.val === "비번찾기" ? <this.EmptyDiv /> : <this.FindPwBtn /> }
            </>
        );
    }
}
export default LoginBtnBar;
