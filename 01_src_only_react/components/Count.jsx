import React,{ Component } from "react";

export default class Count extends Component{
  state ={
    count:0
  }

  increment = ()=>{
    //获取用户的输入
    const {value} = this.refs.userSd
    //获取原来的和
    let {count} = this.state
    count += value*1 
    this.setState({count})
  }

  decrement = ()=>{
    //获取用户的输入
    const {value} = this.refs.userSd
    //获取原来的和
    let {count} = this.state
    count -= value*1
    this.setState({count})
  }

  incrementIfOdd =()=>{
    //函数体
    const {value} = this.refs.userSd
    let {count} = this.state
    if(count %2 === 1){
        count += value*1
        this.setState({count})
    }
  }

  incrementAsync = ()=>{
    //函数体
    const {value} = this.refs.userSd
    let {count} = this.state
    setTimeout(() => {
      count += value*1
      this.setState({count})
    }, 900);
  }

  render(){
    return (
      <div>
        <h1>当前求和为: {this.state.count}</h1>
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