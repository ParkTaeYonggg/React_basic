import React from "react";


// 핸들링 이벤트에서 알아야 할 점은
// 1. this를 끌어와 사용할 수 있도록 만들어주는 bind함수
// 2. 리턴으로 펄스를 받지 못한다. 
// 그래서 필요한 것이 [target].preventDefault();를 사용한다.

// 토글로 그것을 재연해보겠다.
class ExHandler extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            exToggle: true,
        };
        this.hadleToggle = this.hadleToggle.bind(this);
    }

    hadleToggle () {
        console.log(this.state);
        this.setState(exToggling => ({
            exToggle: !exToggling.exToggle,
        }));
        console.log(this);
    }

    render() {
        return (
            <>
                <button onClick={this.hadleToggle}>{this.state.exToggle ? "다음은 오프" : "다음은 온"}</button>
            </>
        );
    }
}
export default <ExHandler />;