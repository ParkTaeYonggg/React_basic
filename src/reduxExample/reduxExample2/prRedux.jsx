import {createStore} from "redux";
import { combineReducers } from "redux";

const COUNT = 0;
const COUNTUP = "COUNTUP";
const COUNTDOWN = "COUNTDOWN";

function reducer(state = COUNT, action) {
    if (action.type === COUNTUP) {
        return action.count;
    } else if (action.type === COUNTDOWN) {
        return action.count;
    }
    return state;
}
export const CountUp = (state) => {
    return {
        type: "COUNTUP",
        count: state + 1
    }
}
export const CountDown = (state) => {
    return {
        type: "COUNTDOWN",
        count: state - 1
    }
}


const rootReducer = combineReducers({
    counter: reducer
});

const store = createStore(rootReducer);

export default store;






















// function mapStateToProps(state, ownProps)
// // 얘는 커넥트 되어질 때마다 발생되니까 쓰기 싫으면 널이나 언디파인이라도 보내라.
