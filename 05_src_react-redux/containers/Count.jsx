//引入UI组件
import Count from "../components/Count";
//引入connect
import { connect } from "react-redux";

//引入更新的方法
import { increment,decrement } from "../redux/actions/count";

export default connect(
  state => ({count:state}),
  
  //原始的写法：
	/* dispatch => (
		{
			increment:(value)=>{dispatch(increment(value))},
			decrement:(value)=>{dispatch(decrement(value))},
		}
	) */
  {increment,decrement} 
  
  )(Count)

  /* 以上精简的原理类似: (全是react-redux底层做的) 
	function connect({a,b}){
 *	//引入了dispatch
		return (
			dispatch => ({
				a: (value) => { dispatch( a(value) ) },
				b: (value) =>{ dispatch( a(value) ) }
			})
		)
	} 
*/