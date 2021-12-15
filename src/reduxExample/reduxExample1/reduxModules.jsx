import React from "react";
import {combineReducers} from "redux"; // 리듀서가 여러개일 경우 하나의 리듀서로 묶어주는 기능이다.
import {login, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILUE} from "./reduxActions";

const defaultState = {
    isLogin: false,
    fetchingUpdate: false,
    user: {}
}

const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state, fetchingUpdate: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state, 
                fetchingUpdate: false,
                isLogin: true,
                user: action.result
            };
        case LOGIN_FAILUE:
            return {
                ...state, fetchingUpdate: false
            };
    }
}


 const RootReducer = combineReducers({
    user: userReducer
 });

export default RootReducer;

