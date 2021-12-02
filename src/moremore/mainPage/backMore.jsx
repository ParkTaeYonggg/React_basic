import React from "react";
import "./backMore.css";
import {Link} from "react-router-dom";

function BackMore () {
    return (
        <>
            <div className="backing_div">후원을 통해 더욱 질좋은 상품을 만나보세요.</div>
            <Link to="/" className="backing_link">후원하러 가기</Link>
        </>
    );
}
export default BackMore;