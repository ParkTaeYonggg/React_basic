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
            {Object.entries(data).map((k,v) => {return <StyledContentDiv key={k.toString()}>{k[1]}</StyledContentDiv>;})}
        </>
    );

}

export default MainContents;


const StyledContentDiv = styled.div`
    width: 300px;
    height: 200px;
    background-color: skyblue;
    padding-right: 30px;
    float: left;
    border: 1px white solid;
`;