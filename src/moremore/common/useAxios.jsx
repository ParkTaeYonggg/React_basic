import React, {useState} from "react";
import axios from "axios";

export default function UseAxios (url, callback) {
    axios(
        {
            url: url,
            method: "post",
            baseURL: "http://localhost:8080",
            withCredentials: true
        }
    ).then (res => {
       callback(res.data);
    })
};