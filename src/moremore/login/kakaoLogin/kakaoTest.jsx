import React from "react";

class KakaoTest extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>로그인되었습니다. {this.props.params}</h1>;
    }
}
export default KakaoTest;