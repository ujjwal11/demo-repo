import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
import Form from './Form';
import List from './List';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputvalue: "",
      search: [],
      todos: [],
    }
  }


  Search = (x) => {
    let search = [];
    if (x == 'complete') {
      this.state.todos.map((value, index) => {
        if (value.done) {
          search.push(value);
        }
      });
    } else if (x == 'incomplete') {
      this.state.todos.map((value, index) => {
        if (!value.done) {
          search.push(value);
        }
      });
    } else if (x == 'all') {
      search = this.state.todos
    }
    this.setState({ search })
  }

  // helllo = () => {
  //   console.log('somechange')
  // }


  // this is to set the value of the input
  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({ inputvalue: event.target.value });
  }

  // this is to initilize the value in show nd give the state and set state to initial
  handleSubmit = (event) => {
    // console.log('submit')
    event.preventDefault();
    const newTodo = {
      id: uuidv1(),
      value: this.state.inputvalue,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos, search: todos, inputvalue: '' }, () => {
      console.log(this.state.todos)
    })
  }

  // this is to check that is todo is done or not
  handleclick = (index) => {
    // console.log('button click', index)
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos, search: todos });
  }


  render() {
    return (
      <div className="App">
        <Form
          inputvalue={this.state.inputvalue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <List
          todos={this.state.search}
          handleclick={this.handleclick}
        />
        <br></br><br></br>
        <input type="button" value="Completed Data" onClick={() => this.Search('complete')} />

        <br></br><br></br>
        <input type="button" value="All Data" onClick={() => this.Search('all')} />

        <br></br><br></br>
        <input type="button" value="Incompleted Data" onClick={() => this.Search('incomplete')} />

      </div>
    )
  }
}

export default App;
