import React from "react";
import styled from "styled-components";
import StyledInput from "../../common/styledInput";
import {WideButton} from "../../common/wide_small_btn";
export default class MyHouseItemsContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            phone: "",
            houseName: "",
            error: false, 
        }
    }
    
    // Ref : handler
    inputRefName;
    inputRefHouseName;
    inputPhone;
    inputAddress;

    // value : handler
    handlerValue = (type, e) => {this.setState({[type]: e.target.value});}

    // submit : handler
    handlerSubmit = (e) => { 
        e.preventDefault(); 
    
        // 저장 후 갈림길 구현
        
    }

    
    render(){
       
        return (
            <form onSubmit={this.handlerSubmit}>
                <AddressContainer>
                <StyledInput id="nameId" 
                                name={"name"} 
                                type="text" 
                                value={this.state.name}
                                placeholder="수령인을 입력해주세요."
                                Ref={e => {this.inputRefName=e;}}
                                error={this.state.error}
                                errorMessage="올바른 이름을 입력해주세요."
                                onChange={(e) => this.handlerValue("name", e)}/>

                <StyledInput id="nameHouseName" 
                                name={"HouseName"}
                                type="text" 
                                value={this.state.houseName}
                                placeholder="배송지명을 입력해주세요."
                                Ref={e => {this.inputRefHouseName = e;}}
                                error={this.state.error}
                                errorMessage="올바른 배송지명을 입력해주세요."
                                onChange={(e) => this.handlerValue("houseName", e)}/>

                <StyledInput id="namePhone" 
                                name={"phone"}
                                type="text" 
                                value={this.state.phone}
                                placeholder="연락처를 입력해주세요."
                                Ref={e => this.inputPhone = e}
                                error={this.state.error}
                                errorMessage="올바른 연락처를 입력해주세요."
                                onChange={(e) => this.handlerValue("phone", e)}/>

                <StyledInput id="nameAddress" 
                                name={"address"}
                                type="text" 
                                value={this.state.address}
                                placeholder="주소를 입력해주세요."
                                Ref={e => this.inputAddress = e}
                                error={this.state.error}
                                errorMessage="올바른 주소를 입력해주세요."
                                onChange={(e) => this.handlerValue("address", e)}/>
                <WideButton>저장</WideButton>
                </AddressContainer>
            </form>
        );
    }
}

const AddressContainer = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
    justify-items: center;
    align-items: center;
    flex-direction: column;
`;