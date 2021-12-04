import React from "react";
import axios from "axios";

class UseAxios extends React.Component {
    constructor (props) {
        super(props);
        this.state = {url: props,data:"데이터 있음"};
    }
    
    
    render() {
        return (
                axios(this.props.url)
                .then (res => {
                   this.setState({data: res});
                })
                .catch(error => alert(error))
            );
    }
}
    

export default UseAxios;