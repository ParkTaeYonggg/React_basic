import './App.css';
import {Route} from "react-router-dom";
import Header from "./moremore/common/header";
import SubmitChk from "./moremore/login/submitChk";
import "./moremore/common/layout.css";
import FooterSection from './moremore/common/footer/footer';
import AllMainPage from './moremore/mainPage/allMainPage';
import TestStyledComponent from './Ex03/printStyle';
import KakaoCode from "./menu/header/login/Kakao_code";

import MainPage from "./menu/main";
import AdContainer from './menu/header/adBanner/adContainer';

function App() {
  return (
    <>
      {/* <Route path="/" component={Header} />
      <div id="mainBody">
        <Route exact path="/" component={AllMainPage} />
        <Route exact path="/lo/" component={SubmitChk} />
      </div>
      <Route path="/" component={FooterSection} /> */}


      {/* <TestStyledComponent /> */}

      <Route path="/" component={MainPage} />
      <Route exact path="/" component={AdContainer} />
      <Route exact path="/login/kakao" component={KakaoCode} />
      
    </>
    
  );
}

export default App;
