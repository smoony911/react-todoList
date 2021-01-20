import React, { Component } from "react";
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
  // 添加事件
  handleAdd = (event) => {
    const {keyCode, target} = event
    if(keyCode !== 13) return 
    if(target.value.trim() === '') {
      alert('输入不能为空！')
      return 
    }
    const todoObj = {id: nanoid(), name: target.value, done: false, isShow: true}
    this.props.addTodo(todoObj)
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <h1 className='title'>TodoList</h1>
        <input type="text" onKeyUp={this.handleAdd} placeholder="请输入您的待办名称，按回车确认" />
      </div>
    );
  }
}
