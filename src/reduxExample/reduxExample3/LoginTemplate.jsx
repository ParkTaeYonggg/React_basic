import React, {useRef, useState} from "react";
import styled from "styled-components";
import StyledInput from "./styledInput";
import {theme} from "./theme";
import { useDispatch, useSelector } from "react-redux";
import {LoginSuccess, LoginFailue} from "./reduxStore";

export default function LoginTemplate () {
    const [values, setValues] = useState("");
    const state = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();
    const handlerValues = (type, e) => { setValues({[type]: e.target.value}) }
    
    const inputRefId = useRef();
    const inputRefPw = useRef();

    const handlerSubmit = (e) => {
        e.preventDefault();
        alert("안녕하세요?");
    }
    return (
        <React.Fragment>
            <FullSize> 
                <SubSize onClick={handlerSubmit}>
                    <StyledInput id="id"
                                 name="id"
                                 type="text"
                                 value={values.id}
                                 onChange={e => handlerValues("id", e)}
                                 placeholder="id를 입력하시오."
                                 Ref={inputRefId}/>
                    <StyledInput id="pw"
                                 name="pw"
                                 type="password"
                                 value={values.pw}
                                 onChange={e => handlerValues("pw", e)}
                                 placeholder="pw를 입력하시오."
                                 Ref={inputRefPw}/>
                    <button>로그인</button>
                </SubSize>
            </FullSize>
        </React.Fragment>
    );
}

const FullSize = styled.div`
    min-height: 680px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SubSize = styled.form`
    width: 800px;
    display: flex;
    flex-direction: column;
    ${theme.tablet} {
        width: 500px;
        height: min-height: 300px;
    };
    ${theme.mobile} {
        width: 250px;
        height: min-height: 200px;
    };
`;