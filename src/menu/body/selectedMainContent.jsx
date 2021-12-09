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
    
    return (
        <MainContentContainer>
            {Object.entries(data).length === 0 ? <h1>게시글이 존재하지 않습니다.</h1> : Object.entries(data).map((k,v) => {
                                                                                  return <StyledContentDiv key={k.toString()}>{k[0]}</StyledContentDiv>;})}
        </MainContentContainer>
    );
}


const MainContentContainer = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    justify-items: center;
    margin-top: 30px;
    gap: 10px;
`;


const StyledContentDiv = styled.div`
    width: 60%;
    height: 200px;
    background-color: rgb(218, 223, 224);
    padding-right: 30px;
    border: 1px white solid;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;

    &:hover {
        animation-name: sizeScale1;
        animation-duration: 0.7s;
        animation-timing-function: ease-out;
        animation-fill-mode: both;
    }

    @keyframes sizeScale1 {
        0% {
            width: 60%;
            height: 200px;
            background-color: rgb(218, 223, 224);
        }
        100% {
            width: 80%;
            height: 250px;
            background-color: skyblue;
        }
    }
`;