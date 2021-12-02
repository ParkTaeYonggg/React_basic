import React from "react";
import axios from "axios";
// import FundingDataAll from "./fundingDataAll";

const {Component} = React;

class FundingBest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fundingBest: "",
            fundingCategory: "",
            fundingNew: "",
            tempData: [{
                            fundingName: "임시상품1",
                            fundingCategory: "의류1",
                            fundingTitle: "임시상품 의류1 입니다.",
                            fundingImg: "/imgs/tempImg1.png"
                        },
                        {
                            fundingName: "임시상품2",
                            fundingCategory: "의류2",
                            fundingTitle: "임시상품 의류2 입니다.",
                            fundingImg: "/imgs/tempImg2.png"
                        },
                        {
                            fundingName: "임시상품3",
                            fundingCategory: "의류3",
                            fundingTitle: "임시상품 의류3 입니다.",
                            fundingImg: "/imgs/tempImg3.png"
                        }]
        };
    }

    // componentDidMount = async () => {
    //     if (this.props.type === "best") {
    //         await axios.get("url")
    //             .then((res) => {
    //                 this.setState({fundingBest:res});
    //             })
    //             .catch();
    //     } else if (this.props.type === "new") {
    //         await axios.get("url")
    //             .then((res) => {
    //                 this.setState({fundingNew:res});
    //             })
    //         .catch();
    //     } else {
    //         await axios.get("url")
    //             .then((res) => {
    //                 this.setState({fundingCategory:res});
    //             })
    //         .catch();
    //     }
    // }
    ReturnTemp = () => {
        let Temp = this.state.tempData.map((e) => 
                <p key={e.fundingName}>
                    <span ><img src={e.fundingImg}/></span>
                    <span >{e.fundingCategory}</span>
                    <span >{e.fundingName}</span>
                    <span >{e.fundingTitle}</span>
                </p>
            );
        return Temp;
    };
    render() {
        return (
            <div id="fundingMainCon">
                {/* {this.props.type === "best" ? <FundingDataAll type="best" value={this.state.fundingBest}/> : null}
                {this.props.type === "new" ? <FundingDataAll type="new" value={this.state.fundingNew} /> : null}
                {this.props.type === "category" ? <FundingDataAll type="category"  value={this.state.fundingCategory}/> : null} */}
                <this.ReturnTemp />
            </div>
                
        );
    }
}

export default FundingBest;