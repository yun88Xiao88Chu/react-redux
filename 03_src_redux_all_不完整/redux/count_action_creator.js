import { INCREMENT,DECREMENT } from "./action_types";

//创建加的action
export const createIncrement = value => ({type:INCREMENT,data:value})

//创建减的action
export const createDecrement = value => ({type:DECREMENT,data:value})

