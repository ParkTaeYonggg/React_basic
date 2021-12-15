import React, {Component} from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
    
    render () {
        return (
            <h1>hello, {this.props.name}, {this.props.age}</h1>
        );
    }
}

// 프롭타입스를 사용하면 넘어온 데이터가 무슨 타입인지 알 수 있어서 로직을 짜는데 용이해진다.
Greeting.propTypes = {
    user: PropTypes.objectOf(PropTypes.any).isRequired,
    dispatch: PropTypes.func.isRequired
}


class TestGreeting extends Component {
    render () {
        return <Greeting age={27} name="만수" />;
    }
}

export default TestGreeting;