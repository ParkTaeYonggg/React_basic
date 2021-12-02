import React from "react";

class FundingNew extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tempData: [{
                            fundingName: "새로운 펀딩1",
                            fundingCategory: "의류",
                            fundingTitle: "새로운 펀딩1 입니다.",
                            fundingImg: "/imgs/tempImg4.png"
                        },
                        {
                            fundingName: "새로운 펀딩2",
                            fundingCategory: "여행",
                            fundingTitle: "새로운 펀딩2 입니다.",
                            fundingImg: "/imgs/tempImg5.png"
                        },
                        {
                            fundingName: "새로운 펀딩3",
                            fundingCategory: "동물",
                            fundingTitle: "새로운 펀딩3 입니다.",
                            fundingImg: "/imgs/tempImg6.png"
                        }]
        };   
    }

    TempFundingNew = () => {
        const Temp = this.state.tempData.map((e) => 
            <p key={e.fundingName}>
                <span ><img src={e.fundingImg}/></span>
                <span >{e.fundingCategory}</span>
                <span >{e.fundingName}</span>
                <span >{e.fundingTitle}</span>
            </p>
        );
        return Temp;
    }
    render(){
        return (
            <div id="fundingMainCon">
                <this.TempFundingNew />
            </div>
        );
    }
    
}
export default FundingNew;