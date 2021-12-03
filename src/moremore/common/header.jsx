import React, {useState, useEffect} from "react";
import PrMenuBar from "./header/prMenuBar";
import SearchBar from "./header/searchBar";
import LoginStatus from "./header/loginStatus";

function CommonComponent () {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
      if (window.sessionStorage.getItem("id") !== null) {
        isLogin ? console.log("") : setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
    return (
        <>
            <header>
                <PrMenuBar />
                <SearchBar />
                <LoginStatus boo={isLogin} />
            </header>
        </>
    );
}
export default CommonComponent;