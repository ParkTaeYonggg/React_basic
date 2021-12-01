import React from "react";
import EmptyInputChk from "./emptyInputChk";

const Id = (props) => {
    return (
        <>
        <input type="text" 
               name="id" 
               value={props.value} 
               onChange={props.onChange} 
               placeholder="아이디"
               className="login_input"
               ref={props.Ref}
        /><br />
        <EmptyInputChk value={props.value} type="아이디"/>
        </>
    );
} 
const Pw = (props) => {
    return (
        <>
            <input type="password" 
                    name="pw" 
                    value={props.value} 
                    onChange={props.onChange} 
                    placeholder="비밀번호"
                    className="login_input"
                    ref={props.Ref}
            /><br />
            <EmptyInputChk value={props.value} type="비밀번호"/>
        </>
    );        
}
const Name = (props) => {
    return (
        <>
            <input type="text" 
                    name="name" 
                    value={props.value} 
                    onChange={props.onChange} 
                    placeholder="이름"
                    className="login_input"
                    ref={props.Ref} 
            /><br />
            <EmptyInputChk value={props.value} type="이름이"/>
        </>
    );        
}
const Email = (props) => {
    return (
        <>
            <input type="email" 
                    name="email" 
                    value={props.value} 
                    onChange={props.onChange} 
                    placeholder="이메일"
                    className="login_input"
                    ref={props.Ref} 
            /><br />
            <EmptyInputChk value={props.value} type="이메일이"/>
        </>
    );        
}

function InputTag (props) {
    return (
        <>
            {props.type === "id" ? <Id value={props.value} onChange={props.onChange} Ref={props.Ref} /> : null}
            {props.type === "pw" ? <Pw value={props.value} onChange={props.onChange} Ref={props.Ref} /> : null}
            {props.type === "name" ? <Name value={props.value} onChange={props.onChange} Ref={props.Ref} /> : null}
            {props.type === "email" ? <Email value={props.value} onChange={props.onChange} Ref={props.Ref} /> : null}
        </>
    );
}

export default InputTag;