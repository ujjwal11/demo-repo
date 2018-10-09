import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className='Form'>
                <form onSubmit={(event) => this.props.handleSubmit(event)}>
                    <input type="text"
                        value={this.props.inputvalue}
                        onChange={(event) => this.props.handleChange(event)}
                    />
                </form>
            </div>
        )
    }
}

export default Form;