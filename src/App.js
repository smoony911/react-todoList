import React, { Component } from "react";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";

import './App.css'

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true, isShow: true },
      { id: "002", name: "睡觉", done: true, isShow: true },
      { id: "003", name: "打代码", done: false, isShow: true },
      { id: "004", name: "逛街", done: false, isShow: true },
    ],
  };

  // addTodo用于添加一个todo，接收的参数是todo对象
  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }

  // updateTodo用于更新一个todo对象
  updateTodo = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      if(todo.id === id) return {...todo, done}
      else return todo
    })
    this.setState({todos: newTodos})
  }

  // deleteTodo用于删除一个todo对象
  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter(todo => {
      return todo.id !== id // ***
    })
    this.setState({todos: newTodos})
  }

  // checkAllTodo用于全选
  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      // todo.done = done
      // return todo
      return {...todo, done}
    })
    this.setState({todos: newTodos})
  }

  // clearAllDone用于清除所有已完成的todo对象
  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter(todo => {
      return !todo.done
    })
    this.setState({todos: newTodos})
  }

  // showAllTodo用于筛选显示所有的todo对象
  showAllTodo = () => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      todo.isShow = true
      return todo
    })
    this.setState({todos: newTodos})
  }

  // showDoneTodo用于筛选显示已完成的todo对象
  showDoneTodo = () => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      todo.isShow = true
      if(!todo.done) {
        todo.isShow = false
      }
      return todo
    })
    this.setState({todos: newTodos})
  }

  // showNoneTodo用于筛选显示未完成的todo对象
  showNoneTodo = () => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      todo.isShow = true
      if(todo.done) {
        todo.isShow = false
      }
      return todo
    })
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} showAllTodo={this.showAllTodo} showDoneTodo={this.showDoneTodo} showNoneTodo={this.showNoneTodo} />
        </div>
      </div>
    );
  }
}
