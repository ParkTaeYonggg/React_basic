import React, {useState} from "react";
import styled from "styled-components";
import { RowContent,VerticalContent } from "../common/theme";
import {SiReact, SiSpring, SiJquery, SiJavascript, SiJava, SiOracle} from "react-icons/si";
import MainContents from "./mainContents";
import SelectedMainContent from "./selectedMainContent";

export default function CategoryLine () {
    const [btnIdx, setBtnIdx] = useState([]);
    
    // 클릭시 아이콘 색 온오프
    const handlerColor = (type,e) => {
        setBtnIdx({...btnIdx, [type]:!e});
    }
    //클릭시 정해진 데이터 불러오기 : default allData
    const HandlerData = () => {
        for (let i of Object.entries(btnIdx)) {
            if (i[1]) {
                return <SelectedMainContent btnIdx={btnIdx} />;  
            } 
        }
        return <MainContents />;
    }

    return (
        <>
            <CategoryContent>
                <SiReact style={StyledSvg} 
                         color={btnIdx.react ? "skyblue" : "#787878"} 
                         onClick={() => handlerColor("react",btnIdx.react)} />

                <SiSpring style={StyledSvg} 
                          color={btnIdx.spring ? "#54BD54" : "#787878"} 
                          onClick={() => handlerColor("spring",btnIdx.spring)} />

                <SiJquery style={StyledSvg} 
                          color={btnIdx.jquery ? "#46649B" : "#787878"} 
                          onClick={() => handlerColor("jquery",btnIdx.jquery)} ></SiJquery>

                <SiJavascript style={StyledSvg} 
                              color={btnIdx.javascript ? "blue" : "#787878"} 
                              onClick={() => handlerColor("javascript",btnIdx.javascript)}></SiJavascript>

                <SiJava style={StyledSvg} 
                        color={btnIdx.java ? "#28A8A8" : "#787878"} 
                        onClick={() => handlerColor("java",btnIdx.java)}></SiJava>

                <SiOracle style={StyledSvg} 
                          color={btnIdx.oracle ? "red" : "#787878"} 
                          onClick={() => handlerColor("oracle",btnIdx.oracle)}></SiOracle>

            </CategoryContent>
            
                <HandlerData />
            
        </>
    );
}


const CategoryContent = styled(RowContent)`
    height: 70px;
    padding-top: 10px;
`;

const StyledSvg = {
    width: "100px",
    height: "100%",
    cursor: "pointer",
}

const FlexContainer =  styled.div`
    width: 100%;
    display: flex;

`;

