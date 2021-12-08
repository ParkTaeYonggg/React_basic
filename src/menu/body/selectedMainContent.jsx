import React, {useState, useEffect} from "react";
import styled from "styled-components";
import UseAxios from "../common/useAxios";


export default function SelectedMainContent ({btnIdx}) {
    const [data, setData] = useState([]);

    // callback : fn
    const callback = (e) => {setData(e)};

    useEffect(() => {
        if (data.length === 0) {
            UseAxios("/api/main/info/seleted?btnIdx="+Object.entries(btnIdx).toString(), callback);
        }
    });
    
    return Object.entries(data).length === 0 ? <h1>게시글이 존재하지 않습니다.</h1> : 
                                               Object.entries(data).map((k,v) => {
                                                    return <StyledContentDiv key={k.toString()}>{k[0]}</StyledContentDiv>;
                                               });
}





const StyledContentDiv = styled.div`
    width: 300px;
    height: 200px;
    background-color: skyblue;
    padding-right: 30px;
    float: left;
    border: 1px white solid;
`;