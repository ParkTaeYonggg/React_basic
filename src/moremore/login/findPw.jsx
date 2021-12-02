import React from "react";
import InputTag from "./loginCommon/InputTag";

class FindPw extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: "",
            name: "",
            email: ""
        };
    }
    inputRefId;
    inputRefName;
    inputRefEmail;

    handleInputId = (e) => {this.inputRefId = e;}
    handleInputName = (e) => {this.inputRefName = e;}
    handleInputEmail = (e) => {this.inputRefEmail = e;}

    handlerValues = (type,e) => {this.setState({[type] : e.target.value});}

    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <InputTag type="id" value={this.state.id} onChange={(e) => this.handlerValues("id",e)} Ref={this.handleInputId} />
                    <InputTag type="name" value={this.state.name} onChange={(e) => this.handlerValues("name", e)} Ref={this.handleInputName} />
                    <InputTag type="email" value={this.state.email} onChange={(e) => this.handlerValues("email", e)} Ref={this.handleInputEmail}/>
                </form>
            </>
        );
    }
}

export default FindPw;