import React,{ Component } from "react";
import store from "../redux/store";
import { createIncrement,createDecrement } from "../redux/actions/count";

export default class Count extends Component{

  increment = ()=>{
    //获取用户的输入
    const {value} = this.refs.userSd
    //获取原来的和
    store.dispatch(createIncrement(value*1))
  }

  decrement = ()=>{
    //获取用户的输入
    const {value} = this.refs.userSd
    //获取原来的和
    store.dispatch(createDecrement(value*1))
  }

  incrementIfOdd =()=>{
    //函数体
    const {value} = this.refs.userSd
    let count = store.getState()
    if(count %2 === 1){
       store.dispatch(createIncrement(value*1))
    }
  }

  incrementAsync = ()=>{
    //函数体
    const {value} = this.refs.userSd
    setTimeout(() => {
      store.dispatch(createIncrement(value*1))
    }, 900);
  }

  render(){
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
        <br/>
        <select ref='userSd'>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}