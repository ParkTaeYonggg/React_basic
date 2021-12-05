import React, {useState, useEffect} from "react";
import UseAxios from "./useAxios";

function AdBannerBtn (props) {
    // const[tempAd1, setTempAd1] = useState("/adFolder/ad0.png");
    // const[tempAd2, setTempAd2] = useState("/adFolder/ad1.png");
    // const[tempAd3, setTempAd3] = useState("/adFolder/ad2.png");
    // const[tempAd4, setTempAd4] = useState("/adFolder/ad3.png");

    const [data, setData] = useState([]);

    // callback fn
    const Callback = (e) => {
        setData(e);
    }

    useEffect(() => {
        if (data.length === 0) {
            UseAxios("/api/adList",Callback);
        }
    });
    const ReturnImg = (e) => <img src={e} className="img_tag" />;
    return (
        <>
            {props.idx === 1 ? ReturnImg(data.ad0) : 
             props.idx === 2 ? ReturnImg(data.ad1) :
             props.idx === 3 ? ReturnImg(data.ad2) :
             props.idx === 4 ? ReturnImg(data.ad3) : null
            } 
        </>
    );
}
export default AdBannerBtn;