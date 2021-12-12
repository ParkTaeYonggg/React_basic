import React, {useState} from "react";
import styled from "styled-components";
import MyHouseItemModal from "./myHouseModal/myHouseItemModal";

export default function MyHouseTopBar () {
    const [modal, setModal] = useState(false);

    const handlerModal = () => {
        setModal(!modal);
    }
    return (
        <>
            <StyledTopBar>
                <span>배송지</span>
                <span onClick={handlerModal}>변경</span>
                {!modal ? null : <FullSize><MyHouseItemModal onClick={handlerModal}/></FullSize>}
            </StyledTopBar>
            
        </>
    );
}

export const FullSize = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;
const StyledTopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;