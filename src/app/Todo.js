import React, { Component } from 'react';



export class Todo extends Component {
  constructor(){
    super()
    this.state = {
      todos: [],
      newTodo:''
    }
  }

  handleClick(e){
    e.preventDefault()
    const todos = [...this.state.todos, this.input.value]
    this.input.value = ''
    this.setState({todos})
  }

  removeToDo(e){
    e.preventDefault()

  }


  render() {
    return (
      <div>
        <form>
          <input
            ref = {node => this.input = node}
            type="text" placeholder="new Notes"/>
          <button onClick={this.handleClick.bind(this)}>Create</button>
          <ul>
            {this.state.todos.map(todo=>(
                    <li onClick={removeToDo.bind(this)}>{todo}</li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}
