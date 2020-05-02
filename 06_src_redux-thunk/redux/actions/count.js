
import { INCREMENT,DECREMENT } from "../action_types";

export const increment = value => ({type:INCREMENT,data:value})

export const decrement = value => ({type:DECREMENT,data:value})

export const incrementAsync = (value,time) => {
  return (dispatch) =>{
    setTimeout(() => {
      dispatch(increment(value))
    }, time);
  }
}