import { combineReducers, createStore } from "redux";

const loginState = {
    isLogin: false,
    userInfo: {},
    loginRequest: false
}

// 액션즈 타입~
const Login = "LOGIN";
const LoginSuccess = "LOGIN_SUCCESS";
const LoginFalue = "LOGIN_FAILUE";
const LoginRequest = "LOGIN_REQUEST";
// 액션즈 리듀서~
const loginReducer = (state = loginState, action) => {
    if (action.type === LoginSuccess) {
        return {...loginState, isLogin: true, userInfo: action.data, loginRequest: action.log};
    } else if (action.type === LoginFalue) {
        return {...loginState, isLogin: false, userInfo : action.data, loginRequest: action.log};
    } else if (action.type === LoginRequest) {
        state.loginRequest = action.log;
    }
    return state;
}
// 액션즈 메서드~
export const fnLoginSuccess = (state, boo) => {
    return {
        type: LoginSuccess,
        data: state,
        log: !boo
    }
}
export const fnLoginFailue = (state,boo) => {
    return {
        type: LoginFalue,
        data: state,
        log: !boo
    }
}
export const fnLoginRequest = (boo) => {
    return {
        type: LoginRequest,
        log: boo
    }
}

//리덕스 컴바인~
const rootReducer = combineReducers({
    loginReducer, 
});
const store = createStore(rootReducer);

export default store;