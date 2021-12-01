import React from "react";
import InputTag from "./loginCommon/InputTag";
import axios from "axios";

class SignupModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: "",
            pw: "",
            name: "",
            email: ""
        };
    }
    inputRefId;
    inputeRefPw;
    inputRefName;
    inputRefEmail;

    TargetingId = (e) => {this.inputRefId = e;}
    TargetingPw = (e) => {this.inputRefPw = e;}
    TargetingName = (e) => {this.inputRefName = e;}
    TargetingEmail = (e) => {this.inputRefEmail = e;}

    handlerValues = (type,e) => {
        this.setState({[type]:e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.id.trim() === "" ? alert("아이디를 입력해주세요.") : 
        this.state.pw.trim() === "" ? alert("비밀번호를 입력해주세요.") : 
        this.state.name.trim() === "" ? alert("이름을 입력해주세요.") : 
        this.state.email.trim() === "" ? alert("이메일을 입력해주세요.") : alert("가입을 축하드립니다.") // axios 자리
    }
    
    render () {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <InputTag type="id" 
                              value={this.state.id} 
                              onChange={(e) => this.handlerValues("id",e)} 
                              Ref={this.TargetingId} />
                              
                    <InputTag type="pw" 
                              value={this.state.pw} 
                              onChange={(e) => this.handlerValues("pw",e)} 
                              Ref={this.TargetingPw} />
                    <InputTag type="name" 
                              value={this.state.name} 
                              onChange={(e) => this.handlerValues("name",e)} 
                              Ref={this.TargetingName} />

                    <InputTag type="email" 
                              value={this.state.email} 
                              onChange={(e) => this.handlerValues("email",e)} 
                              Ref={this.TargetingEmail} />
                              
                    <button onClick={this.handleChkSubmit}>회원가입</button>
                </form>
            </>
        );
    }
}

export default SignupModal;