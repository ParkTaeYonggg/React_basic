import React from "react";

class ExListsAndMap extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            nums: [4,1,3,2,5],
        };
    }
    TempNums (e) {
        const listNums = e.temp.map((ee) =>
             <li key={ee.toString()} value={ee}>{ee}</li>);
        // key 는 고유값으로 아이디와 같은 용도로 사용이 가능하다.
        return (
            <ul>
                {listNums}
            </ul>
        );
    }
    render () {
        // const listNums = this.state.nums.map((e) => <li>{e}</li>);
        // 왜 중괄호가 없어야 실행이 될까?
        return (
            <this.TempNums temp={this.state.nums} />
        );
    }
}
export default <ExListsAndMap />;