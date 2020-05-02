import { ADD_PERSON } from "../action_types";
let initState = [
  {id:'001',name:'老刘-硅谷黄家驹',age:18},
	{id:'002',name:'帅气的海峰',age:19}
]
export default function (preState=initState,action){
  const {type,data} = action
  let newState
  switch (type) {
    case ADD_PERSON:
         newState = [data,...preState]
     return newState
  
    default:
      return preState
  }  
}

// reducer纯函数