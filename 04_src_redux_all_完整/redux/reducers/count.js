import { INCREMENT,DECREMENT } from "../action_types";

let initState = 0
export default function (preState=initState,action){
  let newState
  const {type,data} = action
  switch (type) {
    case INCREMENT:
        newState = preState + data
      return newState
    case DECREMENT:
      newState = preState - data
      return newState
    default:
      return preState
  }
}