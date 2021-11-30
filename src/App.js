import './App.css';
import {Route} from "react-router-dom";
import Header from "./common/header";
import AdBanner from "./common/adBanner";
import SubmitChk from "./login/submitChk";

function App() {
  return (
    <>
      <Route path="/" component={Header} />
      <Route exact path="/" component={AdBanner} />
      <Route exact path="/lo/" component={SubmitChk} />
    </>
    
  );
}

export default App;
