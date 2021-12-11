import './App.css';
import {Route} from "react-router-dom";
import AllPages from './payment/allPages';

// import Header from "./moremore/common/header";
// import SubmitChk from "./moremore/login/submitChk";
// import "./moremore/common/layout.css";
// import FooterSection from './moremore/common/footer/footer';
// import AllMainPage from './moremore/mainPage/allMainPage';
// import TestStyledComponent from './Ex03/printStyle';

// import KakaoCode from "./menu/header/login/Kakao_code";
// import NaverCode from "./menu/header/login/naver_code";
// import MainPage from "./menu/main";
// import AdContainer from './menu/header/adBanner/adContainer';
// import CategoryLine from './menu/body/categoryLine';

function App() {
  return (
    <>
      {/* moremore
      <Route path="/" component={Header} />
      <div id="mainBody">
        <Route exact path="/" component={AllMainPage} />
        <Route exact path="/lo/" component={SubmitChk} />
      </div>
      <Route path="/" component={FooterSection} /> */}


      {/* <TestStyledComponent /> */}

      {/* menu
       <Route path="/" component={MainPage} />
      <Route exact path="/" component={AdContainer} />
      <Route exact path="/" component={CategoryLine} />
      <Route exact path="/login/kakao" component={KakaoCode} />
      <Route exact path="/login/naver" component={NaverCode} /> 
       */}


      <AllPages /> 
    </>
    
  );
}

export default App;
