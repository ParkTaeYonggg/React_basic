import React from "react";
import { Link } from "react-router-dom";
import "./prMenuBar.css";

// 메뉴아이콘 클릭시 메뉴리스트를 화면에 노출시켜줄 버튼 함수
const showMenu = () => { document.querySelector(".showMenu").classList.toggle("showingMenu"); }

const MainMenuBar = () => {
    
    return (
        <div id="leftMenuContainer">
            <span className="menu_icon" onClick={showMenu}>≣</span>
            <nav className="showMenu">
                <div className="uniMenu menu1"><Link to="/">펀딩하기</Link></div>
                <div className="uniMenu menu2"><Link to="/">이용가이드</Link></div>
                <div className="uniMenu menu3"><Link to="/">프로젝트신청</Link></div>
                <div className="menu_bottom menu_bottom_signup"><Link to="/">회원가입</Link></div>
            </nav>
        </div>
    );
}

export default MainMenuBar;