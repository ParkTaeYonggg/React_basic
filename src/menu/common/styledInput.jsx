import React from "react";
import styled from "styled-components";



function StyledInputTag ({type, name, value, Ref, ph, error, errorMessage, onChange}) {
    return (
        <StyledInput type={type} 
                     name={name}
                     value={value}
                     ref={Ref}
                     placeholder={ph}
                     onChange={onChange}/>
        );
}

export default StyledInputTag;






const StyledInput = styled.input`
    border: none;
    border-bottom: 2px solid #787878;
    width: 100%;
    &::after {
        content: after입니다;
    }
`;

