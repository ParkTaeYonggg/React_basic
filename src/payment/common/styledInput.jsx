import React from "react";
import styled from "styled-components";

export default function StyledInput ({id, name, type, value, placeholder, Ref, errorMessage, error, onChange}) {
    return (
            <InputContainsError>
                <InputTag id={id}
                            name={name}
                            type={type}
                            value={value}
                            placeholder={placeholder}
                            ref={Ref}
                            error={error}
                            errorMessage={errorMessage}
                            onChange={onChange}/>
                <ErrorMSGDiv>{errorMessage}!</ErrorMSGDiv>
            </InputContainsError>
            );

}


const ErrorMSGDiv = styled.div`
    color: red;
    font-size: ${props => props.error ? "13px" : "0px"};
    border-bottom: 2px solid ${error => error.error ? "red" : "#787878"};
    margin: auto;
    width: 100%;
    height: 90%;
`;
const InputContainsError = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 90% 10%;
`;
const InputTag = styled.input`
    border: none;
    border-bottom: 2px solid ${error => error.error ? "red" : "#787878"};
    width: 100%;
    height: 90%;
`;
