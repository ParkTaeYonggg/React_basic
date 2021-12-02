import React from "react";
import AdBanner from "../common/adBanner";
import FundingInfo from "../mainPage/fundingInfo";
import FundingBest from '../mainPage/fundingBest';
import BackMore from "./backMore";
import FundingNew from "./fundingNew";

import "./fundingBestNew.css";
const {Component} = React;

class AllMainPage extends Component {

    render () {
        return (
            <>   
                <AdBanner />
                <FundingInfo />
                <p><br></br></p>
                <FundingBest />
                <p><br/></p>
                <BackMore />
                <p></p>
                <FundingNew />
                <p><br/></p>
            </>
        );
    }
}

export default AllMainPage;