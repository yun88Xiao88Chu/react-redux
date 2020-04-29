//引入UI组件
import Count from "../components/Count";
//引入connect
import { connect } from "react-redux";

//引入更新的方法
import { increment,decrement } from "../redux/actions/count";

export default connect(
  state => ({count:state}),
  
  {increment,decrement} 
  
  )(Count)