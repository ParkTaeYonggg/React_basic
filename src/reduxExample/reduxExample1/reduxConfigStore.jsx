import {createStore, applyMiddleware, compose} from "redux";
import reduxMiddleWare from "./reduxMiddleWare";
import RootReducer from "./reduxModules";

export default function (initialState) {
    const enhancer = compose(applyMiddleware(reduxMiddleWare));
    return createStore(RootReducer, initialState, enhancer);
}