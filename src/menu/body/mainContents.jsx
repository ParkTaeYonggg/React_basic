import React,{useState, useEffect} from "react";
import styled from "styled-components";
import UseAxios from "../common/useAxios";

function MainContents (){
    const [data, setData] = useState("");
    
    //callback : fn
    const callback = (e) => {setData(e);}

    // 전체 데이터 불러오는 용도
    useEffect(() => {
            if (data.length === 0) {
                UseAxios("/api/main/info/all", callback);
        }//for
    });


    // eventHandler : callData
    return (
        <>
            <MainContentContainer>
                {Object.entries(data).map((k,v) => {return <StyledContentDiv key={k.toString()}>{k[1]}</StyledContentDiv>;})}
            </MainContentContainer>
        </>
    );

}

export default MainContents;

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