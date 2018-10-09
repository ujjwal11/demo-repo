import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div className="Task">
                <span style={{ textDecoration: this.props.todo.done ? 'line-through' : 'none' }}>
                    {this.props.todo.value}
                </span>
                <button onClick={() => this.props.handleclick(this.props.index)}>{this.props.todo.done ? 'NotCompleted' : 'Completed'}</button>
            </div>
        )
    }
}

export default Task;