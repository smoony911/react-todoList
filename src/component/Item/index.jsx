import React, { Fragment, Component } from 'react'
import "./index.css";

export default class Item extends Component {

    state = {mouse: false}

    // 鼠标移入移出的回调
    handleMouse = (flag) => {
        this.setState({mouse: flag})
    }

    // 勾选，取消勾选某一个todo的回调
    handleClick = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 删除一个todo的回调
    handleDelete = (id) => {
        this.props.deleteTodo(id)
    }
    
    render() {
        const {id, name, done, isShow} = this.props
        const {mouse} = this.state
        return (
            <Fragment>
                {isShow && <li style={{background: mouse ? '#ddd' : '#fff'}} onMouseEnter={() => this.handleMouse(true)} onMouseLeave={() => this.handleMouse(false)} >
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleClick(id)} />
                        <span>{name}</span>
                    </label>
                    <button onClick={() => this.handleDelete(id)} style={{display: mouse ? 'block' : 'none'}}  className="btn btn-danger">删除</button>
                </li>}
            </Fragment>
        )
    }
}
