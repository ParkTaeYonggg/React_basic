import React, {useState, useEffect} from "react";
import axios from "axios";
import "./fundingInfo.css";

function FundingInfo (props) {
    const [nowStatus, setNowStatus] = useState(props.nowStatus);
    const [totalStatus, setTotalStatus] = useState(props.TotalStatus);
    const [totalPrice, setTotalPrice] = useState(props.totalPrice);
    const [nowPrice, setNowPrice] = useState(props.nowPrice);

    useEffect (() => {
        // axios.get("/pleaseData").then((res) => {
        //     setNowPrice(res);
        //     setNowStatus(res);
        //     setTotalPrice(res);
        //     setTotalStatus(res);
        // });
        setNowPrice("2,500,000원");
        setNowStatus("12건");
        setTotalPrice("666,777,333원");
        setTotalStatus("276건");
    });

    return (
        <>
            <div className="fundingInfoMain">
                <div className="fundingGridDiv">
                    <div className="fundingNowStatus">신규펀딩 : {nowStatus}</div>
                    <div className="nowPrice">오늘 펀딩 액 : {nowPrice}</div>
                    <div className="fundingTotalStatus">진행중인 펀딩 : {totalStatus}</div>
                    <div className="fundingTotalPrice">펀딩 총 액 : {totalPrice}</div>
                </div>
            </div>
        </>
    );
}

export default FundingInfo;