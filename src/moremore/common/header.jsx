import React from "react";
import PrMenuBar from "./header/prMenuBar";
import SearchBar from "./header/searchBar";
import LoginStatus from "./header/loginStatus";

function CommonComponent () {
    return (
        <>
            <header>
                <PrMenuBar />
                <SearchBar />
                <LoginStatus />
            </header>
        </>
    );
}
export default CommonComponent;