import React from "react";
import {useSelector} from "react-redux";

export default function ReduxDataChk () {
    const state = useSelector((state) => state.loginReducer);
    console.log(state);
    return <h1>{state.userInfo.nickname}</h1>;
}