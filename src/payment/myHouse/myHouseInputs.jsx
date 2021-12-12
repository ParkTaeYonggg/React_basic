import React, {useState} from "react";
import styled from "styled-components";
import MyHouseInfo from "./myHouseInfo";
import PrintHouse from "./printHouse";


export default function MyHouseInputs () {
    const [isToggle, setIsToggle] = useState(false);
    const [data, setData] = useState("");
    const [selectedData, SetSelectedData] = useState(1);

    // 초기 데이터 불러오기
    const callback = (e) => {
        setData(e);
    }

    // 데이터 선택시 default 는 1번 배송지
    const callbackData = (e) => {
        SetSelectedData(e);
    }

    const handlerToggle = () => {
        setIsToggle(!isToggle);
    }
   return (
       <>
            <ChangeArrivalWay onClick={handlerToggle}>기본배송지 변경</ChangeArrivalWay>
            {isToggle ? <MyHouseInfo data={data} 
                                     callback={callback} 
                                     handlerToggle={handlerToggle}
                                     callbackData={callbackData}/> : null}
           <PrintHouse selectedData={selectedData}/>
       </>
   );
}

const ChangeArrivalWay = styled.div`
    font-size: 13px;
    color: #787878;
    cursor: pointer;
`;

