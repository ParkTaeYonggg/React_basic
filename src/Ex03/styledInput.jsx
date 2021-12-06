import React from "react";
import styled from "styled-components";
import Theme from "./theme";
const { Fragment } = React;

const StyledInput = styled.input`
    color: #787878;
    border: none;
    width: 95%;
    heigth: 40px;
    background-color: inherit;
    border-bottom: 2px solid ${props => props.value === "" ? "red" : "#787878"};
`;

export default function CustomInput ({type, Ref, id, name, value, onChange}) {
    return (
        <StyledInput type={type} 
                     ref={Ref}
                     id={id}
                     name={name}
                     value={value}
                     onChange={onChange}
                     />
    );
}
