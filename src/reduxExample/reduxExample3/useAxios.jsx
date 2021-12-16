import React, {useState, useEffect} from "react";
import axios from "axios";
import {fnLoginFailue, fnLoginSuccess} from "./reduxStore";


export default function UseAxios (url, dispatch) {
    axios({
            url: url,
            method: "post",
            baseURL: "http://localhost:8080",
            withCredentials: true
         })
         .then(res => {
             if (res.data.id !== undefined) {
                dispatch(fnLoginSuccess(res.data, false));
             } else {
                dispatch(fnLoginFailue(res.data, false));
             }
             
         })
         .catch(error => { alert("관리자에게 문의하시오. (에러내용 : " + error + " )"); console.log()})
}