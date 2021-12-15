import React from "react";
import styled from "styled-components";
import {color, basicTheme} from "./theme";

const InputTag = styled.input`
    border: none;
    border-bottom: 2px ${color.basicColor} solid;
    width: 99.5%;
    height: 50px;
    &:hover {
        animation-name: colorOn;
        animation-duration: 0.7s;
        animation-fill-mode: both;
        animation-timing-function: ease-out;
    }
    @keyframes colorOn {
        from {
            left: 0%;
        };
        to {
            left: 100%;
            color: ${color.background};
            background-color: ${color.basicColor};
        };
    }
`;

export default function StyledInput ({id, name, type, onChange, value, placeholder, Ref}) {
    return <InputTag id={id}
                     name={name}
                     type={type}
                     onChange={onChange}
                     value={value}
                     placeholder={placeholder}
                     style={basicTheme}
                     ref={Ref}
            />;
}