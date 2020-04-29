//为count组件服务的reducer,真正处理逻辑的
let initState = 0
export default function (preState=initState,action){
  const {type,data} = action
  let newState
  switch (type) {
    case 'increment':
      newState = preState + data
      return newState
      case 'decrement':
        newState = preState - data
        return newState
    default:
        return preState
  }
}