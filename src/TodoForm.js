import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({inputValue: event.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({inputValue: ''})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default TodoForm;