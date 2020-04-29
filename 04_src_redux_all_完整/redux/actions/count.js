
import { INCREMENT,DECREMENT } from "../action_types";

export const createIncrement = value => ({type:INCREMENT,data:value})

export const createDecrement = value => ({type:DECREMENT,data:value})