import React from "react";
import "./ex01ConditionalRenderingCss.css";

// 조건연산자 라고 봐도 무방한 파트

// 자바스크립트와 같은 방식인 조건연산자 혹은 조건문을 통해 랜더를 다루도록 하자.

// 로그인 기능으로 재연해본다. + 바인드함수
// --> 에로우펑션을 사용하면 바인드함수가 필요없다.

class ExLoginChk extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            LoginChk: false,
            showingDiv: true
        };
        this.successLogin = this.successLogin.bind(this);
        this.LoginChk = this.LoginChk.bind(this);
    }
    successLogin () {
        this.setState({
            LoginChk: true,
        });
        
    }
    failLogin = () => {
        this.setState({
            LoginChk: false,
        });
    }
    // 바를 숨기고 보여줄 토글함수
    hadleShowingToggle = () => {
       this.setState(e => ({
            showingDiv: !e.showingDiv
       }));
    }
    // 토글에 따라 바를 리턴해줄 함수
    ReturnBar = (e) => {
        if (!e.chkPoint) {
            return null;
        }
        return (<div className="blueBar">블루바~</div>);
    }
    LoginChk () {
        if (this.state.LoginChk) {
            return (
                <>
                    <this.welcome />
                    <button onClick={this.failLogin}>로그아웃</button>
                    <hr></hr>
                    <this.ReturnBar chkPoint={this.state.showingDiv} />
                    <button onClick={this.hadleShowingToggle}>{this.state.showingDiv ? "감추기":"보여주기"}</button>
                </>
            );
        } else {
            return (
                <>
                    <h1>로그인을 해주세요</h1>
                    <button onClick={this.successLogin}>로그인</button>
                </>
            );
        }
    }
welcome () {
    let name = "박초보";
    return (
        <>
            <h1>반갑습니다. {name}님</h1>
        </>
    );
}
    render() {
        return (
           <this.LoginChk />
        );
    }
}
export default <ExLoginChk />;