import React from "react";
import axios from "axios";

export default function UseAxios ({url, callback, Method}) {

    if (Method === "get") {
        axios.get(url)
             .then(res => {
                 callback(res.data);
             })
             .catch(error => alert("관리자에게 문의하세요 (#에러정보 : " + error + ")"));
    } else {
        axios.post(url)
             .then(res => {
                 callback(res.data);
             })
             .catch(error => alert("관리자에게 문의하세요 (##에러정보 : " + error + ")"));
    }

}