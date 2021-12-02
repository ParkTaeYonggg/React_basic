import React from "react";
import InputTag from "./loginCommon/InputTag";

class FindId extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            email: ""
        };
    }
    inputRefName;
    inputRefEmail;
    handleInputName = (e) => {this.inputRefName = e;}
    handleInputEmail = (e) => {this.inputRefEmail = e;}
    
    handlerValue = (type,e) => {this.setState({[type]:e.target.value});}
    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <InputTag type="name" value={this.state.name} Ref={this.handleInputName} onChange={(e) => this.handlerValue("name", e)}/>
                    <InputTag type="email" value={this.state.email} Ref={this.handleInputEmail} onChange={(e) => this.handlerValue("email", e)} />
                </form>
            </>
        );
    }
}

export default FindId;