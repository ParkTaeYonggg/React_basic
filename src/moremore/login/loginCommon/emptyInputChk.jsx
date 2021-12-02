import React from "react";
import "./emptyInputChk.css";

function EmptyInputChk (props) {
    // const EmptyMessage = <div className="errorMessageForInput">입력!</div>;

    const ErrorMessage = () => {
        if (!/^(?=.*[a-zA-Z0-9]).{4,25}$/.test(props.value)) {
            return <div className="errorMessageForInput2">4글자 이상 입력</div>;
        } 
    return <div className="successMessageForInput">멋진 {props.type}네요!</div>;
    }

    return (
        <>
            {props.value.trim() === "" ?  null : <ErrorMessage />}
        </>
    );
}
export default EmptyInputChk;