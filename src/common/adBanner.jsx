import React, {useState } from "react";
import "./adBanner.css";


function AdBanner () {
    const [idx, setIdx] = useState(0);
     // let createAd = props.ad.map((ad) => 
    //     <img key={ad.toString()} src={"./adFolder/"+ad+".png"} className="img_tag" />
    // );
    const handleAdRight = () => {
        if (idx >= 3) {
            setIdx(0)
        } else {
            setIdx(idx+1)
        }
    }
    const handleAdLeft = () => {
        if (idx <= 0) {
            setIdx(3);
        } else {
            setIdx(idx-1);
        }
    }
    const HandleAd = (props) => {
        return (
            <div className="img_div">
                <div className="inner_img_div">
                    <button onClick={handleAdLeft} className="prev_btn">prev</button>
                    <img key={props.toString()} src={"/adFolder/ad"+props.ad+".png"} className="img_tag" />
                    <button onClick={handleAdRight} className="next_btn">next</button>
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