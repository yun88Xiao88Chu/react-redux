//引入UI组件
import Count from "../components/Count";
//引入connect
import { connect } from "react-redux";

//引入更新的方法
import { increment,decrement,incrementAsync } from "../redux/actions/count";

export default connect(
  state => ({
    count:state.number,
    personCount:state.persons.length
  }),
  
  {increment,decrement,incrementAsync} 
  
  )(Count)