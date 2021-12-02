import React from "react";
import "./loginStatus.css";
import {Link} from "react-router-dom";

class LoginStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name:""};
        
        this.logOut = this.logOut.bind(this);
    }
    componentDidMount() {
        if (sessionStorage.getItem("id")) {
            this.setState({
                name: sessionStorage.getItem("id"),
            });
        }
    }
    // 로그아웃 함수
    logOut () {
        alert("로그아웃 되었습니당.");
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("pw");
        this.setState({
            name: ""
        });
        document.location.href="/";
    }
    // 로그인 시 노출될 화면
    LoginChk = () => {
        if (this.state.name.trim() == "") {
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
            <this.LoginChk />
        );
    }
}

export default LoginStatus;