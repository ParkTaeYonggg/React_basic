import React from "react";

// axios 가정 하에 만든 jsx

const TempDataDiv = (e) => {
    const ReturnTemp = e.map((e) => {
        return (
        <>
            <div id="parentAAAA" key={e.toString}>
                <div>{e.fundingName}</div>
                <div>{e.fundingPrice}</div>
            </div>
        </>
        );
    });
    return <div id="mainContainer"><ReturnTemp /></div>;
}

function FundingDataAll (props) {
    if (props.type === "best") {
        return <TempDataDiv val={props.value} />;
    } else if (props.type === "new") {
        return <TempDataDiv val={props.value} />;
    } else {
        return <TempDataDiv val={props.value} />;
    }
}


export default FundingDataAll;