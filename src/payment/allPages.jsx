import React from "react";
import styled from "styled-components";

import {Device} from "./common/theme";
import TotalMyHouse from "./myHouse/totalMyHouse";
export default function AllPages () {
    return (
        <FullScreen>
            <DeviceSize>
                <TotalMyHouse />
            </DeviceSize>
        </FullScreen>
    );
}

const DeviceSize = styled.div`
    width: 478px;
    ${Device.tablet} {
        width: 90%;
    }
`;

const FullScreen = styled.div`
    width: inherit;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`;