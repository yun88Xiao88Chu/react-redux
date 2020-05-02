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

/* 
纯函数:
  1).一类特别的函数:只要是同样的输入(实参),必定得到同样的输出(返回)
  2).必须遵守以下一些约束
      a.不得改写参数数据
      b.不会产生任何副作用,例如网络请求,输入和输出设备
      c.不能调用Date.now()或者Math.random()等不纯的方法
  3).redux的reducer函数必须是一个纯函数    
*/