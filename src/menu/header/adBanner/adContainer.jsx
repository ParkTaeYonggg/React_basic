import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import { AdLine } from "../../common/theme";
import UseAxios from "../../common/useAxios";

function AdContainer () {
    const [imgData, setImgData] = useState([]);
    const [nowImg, setNowImg] = useState(null);

    // 얘는 데이터를 디비나 aws에서 받아올 용도
    const callback = (e) => {
        setImgData(e);
    }

    // 얘는 다른 이벤트와 함께 랜더처리 안되게 막아놓으려고 함.
    useEffect(async () => {
        // if (imgData.length === 0 && prev !== imgData) {
            UseAxios("/api/adList",callback);
        // }
    }, []);
    
    // 얘는 광고베너가 돌아가게 만들어줄 애
    useEffect (() => {
            let timer = setInterval(() => {    
                if (nowImg === null) {
                     setNowImg(imgData.ad1);
                } else if (nowImg === imgData.ad0) {
                     setNowImg(imgData.ad1);
                } else if (nowImg === imgData.ad1) {
                     setNowImg(imgData.ad2);   
                } else if (nowImg === imgData.ad2) {
                     setNowImg(imgData.ad3);
                } else if (nowImg === imgData.ad3) {
                      setNowImg(imgData.ad0);
                }  
             }, 5000);
        return () => clearInterval(timer);
    });
    // 얘는 버튼 클릭시 해당하는 이미지를 박스에 출력시켜주는 용도
    const ShowImg = (e) => { 
        setNowImg(e);
    }

    return (
        <AdLine>
            {!nowImg ? <img src={imgData.ad0} style={styledImg}/> : <img src={nowImg} style={styledImg}/>}
            <div>
                <ImgBtn onClick={() => ShowImg(imgData.ad0)}/>
                <ImgBtn onClick={() => ShowImg(imgData.ad1)}/>
                <ImgBtn onClick={() => ShowImg(imgData.ad2)}/>
                <ImgBtn onClick={() => ShowImg(imgData.ad3)}/>
            </div>
        </AdLine>
    );
}

export default AdContainer;


const ImgBtn = styled.button`
    padding: 3px;
    background-color: #787878;
    border-radius: 50%;
    opacity: 0.5;
    margin-right: 5px;
    cursor: pointer;
`;

const styledImg = {
    width: "1330px",
    maxWidth: "100%",
    height: "100%",
    cursor: "pointer"
}