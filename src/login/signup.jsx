import React from "react";

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
    render () {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="id" value={this.state.id} onChange={(e) => this.setState({id:e.target.value})} placeholder="아이디를 입력해주세요." className="login_input" /><br />
                    <input type="password" name="pw" value={this.state.pw} onChange={(e) => this.setState({pw: e.target.value})} placeholder="비밀번호를 입력해주세요." className="login_input" /><br />
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} placeholder="이름을 입력해주세요." className="login_input" /><br />
                    <input type="email" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="이메일을 입력해주세요." className="login_input" />
                </form>
            </>
        );
    }
}

export default SignupModal;