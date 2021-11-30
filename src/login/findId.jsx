import React from "react";

class FindId extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: "",
            name: "",
            email: ""
        };
    }
    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="id" value={this.state.id} placeholder="아이디"className="login_input" onChange={(e) => this.setState({id:e.target.value})}/><br />
                    <input type="text" name="name" value={this.state.name} placeholder="이름"className="login_input" onChange={(e) => this.setState({name:e.target.value})}/><br />
                    <input type="email" name="email" value={this.state.email} placeholder="이메일"className="login_input" onChange={(e) => this.setState({email:e.target.value})} /><br />
                </form>
            </>
        );
    }
}

export default FindId;