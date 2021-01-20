import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {

  // 全选checkbox的回调
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }  

  // 清除全部已完成的回调
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  // 筛选显示全部的todos
  handleShowAll = () => {
    this.props.showAllTodo()
  }

  // 筛选显示已完成的todos
  handleShowDone = () => {
    this.props.showDoneTodo()
  }

  // 筛选显示未完成的todos
  handleShowNone = () => {
    this.props.showNoneTodo()
  }

  render() {
    const {todos} = this.props
    
    // 已完成的个数
    // const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0),0)
    const doneCount = () => {
      let sum = 0
      todos.forEach(todo => {
        if(todo.done) sum++
      })
      return sum
    }

    // 

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount() === todos.length && todos.length !== 0} />
        </label>
        <span>
          <span> 已完成{doneCount()} </span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone} > 清除已完成任务</button>
        <button className="btn btn-alive" onClick={this.handleShowNone}> 未完成 </button>
        <button className="btn btn-done" onClick={this.handleShowDone}> 已完成 </button>
        <button className="btn btn-all" onClick={this.handleShowAll}> 全部 </button>
      </div>
    );
  }
}
