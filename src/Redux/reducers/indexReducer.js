import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./loginReducer";
import { ApiReducer } from "./ApiReducer";

const reducers = combineReducers({
    ActiveUser: loginReducer,
    Datas: ApiReducer
});

export default reducers;