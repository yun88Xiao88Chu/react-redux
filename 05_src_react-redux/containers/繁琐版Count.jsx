//1.引入UI组件
import Count from "../components/Count";
//2.引入connect
import { connect } from "react-redux";
//3.引入action 组件想干的事
import { increment,decrement } from "../redux/actions/count";

function mapStateToProps(state){
  return {count:state}
}

function mapDispatchToProps(dispatch){
  return {
    increment: (value)=>{dispatch(increment(value))},
    decrement: (value)=>{dispatch(decrement(value))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Count)
