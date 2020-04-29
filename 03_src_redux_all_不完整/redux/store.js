//创建redux核心对象store

import { createStore } from "redux";
import countReducer from "./count_reducer";
//指定好为store服务的reducer

export default createStore(countReducer)