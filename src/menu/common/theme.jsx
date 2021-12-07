import React from "react";
import styled from "styled-components";

const device_size = {
    tablet: "768px",
    mobile: "425px",
}

const Device = {
    tablet: `@media screen and (max-width: ${device_size.tablet})`,
    mobile: `@media screen and (max-width: ${device_size.mobile})`
}

export const HeaderLine = styled.div`
    margin-top: 0px;
    padding: 0px 50px 0px 30px;
    display: flex;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const AdLine = styled.div`
    display: grid;
    height: 400px;
    grid-template-rows: 90% 10%;
    align-items: center;
    justify-content: center;
    justify-items: center;
`;

export const VerticalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;  

export const RowContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const gridContenVertical = styled.div`
    display: grid;
    grid-template-rows: 19% 19% 19% 19% 19%;
    align-items: center;
    justify-content: center;
`;

export default Device;