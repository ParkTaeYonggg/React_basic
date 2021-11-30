import React from "react";


class ExRendering extends React.Component {
    constructor (e) {
        super(e);
        this.state = {
            nowDate: new Date().toLocaleTimeString(),
            nowData: "변경 전",
        };
    }    
    componentDidMount () {
       this.timerId = setInterval(() => {
            this.setState({
                nowDate: new Date().toLocaleTimeString(),
            });
        }, 1000);
    }
    componentWillUnmount () {
        clearInterval(this.timerId);
    }
    render () {
        return (
            <div className="exDiv">
                <h1>{this.state.nowDate}</h1>
            </div>
        );
    }
}

export default <ExRendering />;