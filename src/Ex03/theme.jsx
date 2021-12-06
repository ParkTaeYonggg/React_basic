import React from "react";
import styled from "styled-components";

export const device_size = {
    mobile: "425px",
    tablet: "768px",
    desktop: "1440px"
}
const Device = {
    mobile: `@media screen and (max-width: ${device_size.mobile})`,
    tablet: `@media screen and (max-width: ${device_size.tablet})`,
    desktop: `@media screen and (max-width: ${device_size.desktop})`
}

export const Input_container_grid = styled.div`
    position: relative;
    left: 300px;
    top: 100px;
    display: grid;
    grid-template-rows: 20% 20% 20% 20% 20%;
    width: 500px;
    height: 210px;
    ${Device.tablet} {
        width: 300px;
    };
    ${Device.mobile} {
        width: 50px;
    }
`;

export const FlexTheme = styled.div`
    display: flex;
    
    height: 200px;
    border: 1px black solid;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    overflow: hidden;
`;
export default Device;