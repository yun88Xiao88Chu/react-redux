//创建redux核心对象store

import { createStore,applyMiddleware, } from "redux";

import allReducer from "./reducers";
import thunk from "redux-thunk";


//指定好为store服务的reducer
export default createStore(allReducer,applyMiddleware(thunk))