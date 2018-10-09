import React, { Component } from 'react';
import Task from './Task';

class List extends Component {
    render() {
        return (
            <div className="List">
                {this.props.todos.map((todo, index) => {
                    return (
                        <Task
                            key={index}
                            index={index}
                            handleclick={this.props.handleclick}
                            todo={todo}
                        />
                    )
                })}
            </div>
        )
    }

}

export default List;