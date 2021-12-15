import { combineReducers, createStore } from "redux";

const loginState = {
    isLogin: false,
    userInfo: {},
}

// 액션즈 타입~
const Login = "LOGIN";
const LoginSuccess = "LOGIN_SUCCESS";
const LoginFalue = "LOGIN_FAILUE";
// 액션즈 리듀서~
const loginReducer = (state = loginState, action) => {
    if (action.type === LoginSuccess) {
        return {isLogin: true, userInfo: action.data};
    } else if (action.type === LoginFalue) {
        return {isLogin: false, userInfo : {}};
    }
    return state;
}


//리덕스 컴바인~
const rootReducer = combineReducers({
    loginReducer, 
});
const store = createStore(rootReducer);

export default store;