import './App.css';
import {Route} from "react-router-dom";
import Header from "./moremore/common/header";
import SubmitChk from "./moremore/login/submitChk";
import "./moremore/common/layout.css";
import FooterSection from './moremore/common/footer/footer';
import AllMainPage from './moremore/mainPage/allMainPage';
import TestStyledComponent from './Ex03/printStyle';


function App() {
  return (
    <>
      {/* <Route path="/" component={Header} />
      <div id="mainBody">
        <Route exact path="/" component={AllMainPage} />
        <Route exact path="/lo/" component={SubmitChk} />
      </div>
      <Route path="/" component={FooterSection} /> */}
      <TestStyledComponent />
      
    </>
    
  );
}

export default App;
