import React, {useRef, useState, useEffect} from "react";
import styled from "styled-components";
import StyledInput from "./styledInput";
import {theme} from "./theme";
import { useDispatch, useSelector } from "react-redux";
import {fnLoginRequest} from "./reduxStore";
import UseAxios from "./useAxios";
import {Link} from "react-router-dom";

export default function LoginTemplate () {
    const [values, setValues] = useState("");
    const state = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (state.loginRequest) {
            state.isLogin ? alert(state.userInfo.nickname+ "님 환영합니다.") : alert("아이디 및 비밀번호를 확인해주세요.")
            dispatch(fnLoginRequest(false));
        }
    });

    // value
    const handlerValues = (type, e) => { setValues({...values, [type]: e.target.value}) }
    // Ref
    const inputRefId = useRef();
    const inputRefPw = useRef();

    const handlerSubmit = async (e) => {
        e.preventDefault();
        if (inputRefId.current.value.trim() === "") {
            alert("아이디를 입력해주세요.");
            inputRefId.current.focus();
        } else if (inputRefPw.current.value.trim() === "") {
            alert("비밀번호를 입력해주세요.");
            inputRefPw.current.focus();
        } else {
            UseAxios("/api/login/redux?id=" + values.id + "&pw=" + values.pw, dispatch);
    }
}

    return (
        <React.Fragment>
            <FullSize> 
                <SubSize onSubmit={handlerSubmit}>
                    <StyledInput id="id"
                                 name="id"
                                 type="text"
                                 value={values.id || ""}
                                 onChange={(e) => handlerValues("id", e)}
                                 placeholder="id를 입력하시오."
                                 Ref={inputRefId}/>
                    <StyledInput id="pw"
                                 name="pw"
                                 type="password"
                                 value={values.pw || ""}
                                 onChange={(e) => handlerValues("pw", e)}
                                 placeholder="pw를 입력하시오."
                                 Ref={inputRefPw}/>
                    <button>로그인</button>
                    <Link to="/redux/test/data">확인하러가기</Link>
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