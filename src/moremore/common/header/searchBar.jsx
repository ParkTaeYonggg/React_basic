import React from "react";
import "./searchBar.css";
import logo from "../logo2.png";
import { Link } from "react-router-dom";

class HeaderBar extends React.Component {
    render () {
        return (
            <> 
                <Link to="/" className="logoATag"><img src={logo} alt="moremore" className="header_logo" /></Link>
                <Link to="/sc/searchPage" className="searchBar">검색</Link>
            </>
        );
    }
}
export default HeaderBar;
