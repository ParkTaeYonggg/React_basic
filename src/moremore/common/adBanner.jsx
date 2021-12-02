import React, {useState } from "react";
import "./adBanner.css";
import AdBannerBtn from "./adBannerBtn";


function AdBanner () {
    const [idx, setIdx] = useState(1);

    // const inputRef = React.useRef(null);
    // ref={inputRef} 
    // 훅 전용 인풋레프임
    const HandleChangeAd = (e) => {
        setIdx(e);
    }
    const CreateBtn = () => {
        return (
            <div className="btnBox">
                <span className="btn1"onClick={() => HandleChangeAd(1)}>2</span>
                <span className="btn2"onClick={() => HandleChangeAd(2)}>2</span>
                <span className="btn3"onClick={() => HandleChangeAd(3)}>3</span>
                <span className="btn4"onClick={() => HandleChangeAd(4)}>4</span>
            </div>
        );
    }
    const HandleAd = () => {
        return (
            <div className="img_div">
                <div className="inner_img_div">
                    <CreateBtn />
                    <AdBannerBtn idx={idx} />
                </div>
            </div>
        );
    }    
    return (
        <>  
            <HandleAd ad={idx} />
        </>
    );
}



export default AdBanner;