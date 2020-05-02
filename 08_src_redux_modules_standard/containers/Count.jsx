import React,{ Component } from "react";
//引入connect
import { connect } from "react-redux";
//引入更新的方法
import { increment,decrement,incrementAsync } from "../redux/actions/count";

class Count extends Component{

  increment = ()=>{
    //获取用户的输入
    const {value} = this.refs.userSd
    //获取原来的和
    this.props.increment(value*1)
  }

  decrement = ()=>{
    //获取用户的输入
    const {value} = this.refs.userSd
    //获取原来的和
    this.props.decrement(value*1)
  }

  incrementIfOdd =()=>{
    //函数体
    const {value} = this.refs.userSd
    let {count} = this.props
    if(count %2 === 1){
      this.props.increment(value*1)
    }  
  }

  incrementAsync = ()=>{
    //函数体
    const {value} = this.refs.userSd
    this.props.incrementAsync(value*1,800)
  }

  render(){
    return (
      <div>
        <h1>当前求和为: {this.props.count},下方的总人数为: {this.props.personCount}</h1>
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


export default connect(
  state => ({
    count:state.number,
    personCount:state.persons.length
  }),
  
  {increment,decrement,incrementAsync} 
  
  )(Count)