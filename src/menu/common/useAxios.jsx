import React, {useState} from "react";
import axios from "axios";

export default function UseAxios (url, callback) {
    axios({
        url: url,
        method: "POST",
        baseURL: "http://localhost:8080",
        withCredentials: true
    })
    .then(res => {
        callback(res.data);
    })
    .catch(error => alert("관리자에게 문의하세요.(axios : "+error+")"));
}