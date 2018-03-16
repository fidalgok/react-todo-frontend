import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
const APIURL = '/api/todos';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    
    this.loadTodos();
  }

  loadTodos() {
    fetch(APIURL)
      .then(resp => {
        //some error handling
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              let err = { errorMessage: data.message };
              throw err;
            })
          } else {
            let err = { errorMessage: 'Please try again later, server is not responding' }
            throw err;
          }
        }
        //everything went ok, pass on the json!
        return resp.json();
      })
      .then(todos => this.setState({ todos }));
  }



  addTodo(val){
    console.log("Adding todo from todoform ", val)
    fetch(APIURL, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({name: val})
    })
      .then(resp => {
        //some error handling
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              let err = { errorMessage: data.message };
              throw err;
            })
          } else {
            let err = { errorMessage: 'Please try again later, server is not responding' }
            throw err;
          }
        }
        //everything went ok, pass on the json!
        return resp.json();
      })
      .then(() => this.loadTodos());

  }

  render() {
    const todos = this.state.todos.map(todo => (
      <TodoItem key={todo._id} todo={todo} />
    ))

    return (
      <div className="container">
        <h1>Todo List!</h1>
        <TodoForm addTodo={this.addTodo}/>
        <ul>
          {todos}
        </ul>
      </div>

    )

  }
}

export default TodoList;