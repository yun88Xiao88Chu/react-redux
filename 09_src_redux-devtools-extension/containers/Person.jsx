import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { connect } from "react-redux";
import { addPerson } from "../redux/actions/person";

class Person extends Component {

  add = ()=>{
    //1.获取用户输入
    const {nameNode,ageNode} = this.refs
    //2.表单验证
    if(!nameNode.value || !ageNode.value){
       alert('输入不能为空')
       return 
    }
    //3.更新状态
    this.props.addPerson({
      id: uuidv4(),
      name: nameNode.value,
      age: ageNode.value
    })
    //4.清空输入
    nameNode.value = ''
    ageNode.value = ''
  }

  render() {
    const {persons,number} = this.props
    return (
      <div>
         <h1>当前的总人数为:{persons.length},上方的组件求和为:{number}</h1>
         <input ref='nameNode' type="text" placeholder="输入名字"/>&nbsp;
         <input ref='ageNode' type="text" placeholder="输入年龄"/>&nbsp;
         <button onClick={this.add}>添加</button>
         <ul>
           {persons.map(personObj => {
             return (
              <li key={personObj.id}>姓名:{personObj.name}---年龄:{personObj.age}</li>
             )
           } )}
         </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    persons:state.persons,
    number:state.number
  }),
  {addPerson}
)(Person)