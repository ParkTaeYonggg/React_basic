import React, {useState} from "react";

function AdBannerBtn (props) {
    const[tempAd1, setTempAd1] = useState("/adFolder/ad0.png");
    const[tempAd2, setTempAd2] = useState("/adFolder/ad1.png");
    const[tempAd3, setTempAd3] = useState("/adFolder/ad2.png");
    const[tempAd4, setTempAd4] = useState("/adFolder/ad3.png");

    const ReturnImg = (e) => <img src={e} className="img_tag" />;
    return (
        <>
            {props.idx === 1 ? ReturnImg(tempAd1) : 
             props.idx === 2 ? ReturnImg(tempAd2) :
             props.idx === 3 ? ReturnImg(tempAd3) :
             props.idx === 4 ? ReturnImg(tempAd4) : null
            } 
        </>
    );
}
export default AdBannerBtn;