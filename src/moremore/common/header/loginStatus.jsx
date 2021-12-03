import React from "react";
import "./loginStatus.css";
import {Link} from "react-router-dom";

class LoginStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name:window.sessionStorage.getItem("id")};
        this.logOut = this.logOut.bind(this);
    }
    // 로그아웃 함수
    logOut () {
        alert("로그아웃 되었습니당.");
        window.sessionStorage.removeItem("id");
        this.setState({
            name: ""
        });
        document.location.href="/";
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && this.props.boo) {
            this.setState({name:window.sessionStorage.getItem("id")});
        }
    }
    // 로그인 시 노출될 화면
    LoginChk = (e) => {
        if (!e.boo) {
            return (
                <Link to="/lo/" className="loginStatus">로그인</Link>
            );
        } else {
            return (
                <>
                    <div className="loginStatus">{this.state.name}님</div>
                    <div className="logOut" onClick={this.logOut}>로그아웃</div>
                </>
            );
        }
    }
    render() {
        return (
            <this.LoginChk boo={this.props.boo} />
        );
    }
}

export default LoginStatus;