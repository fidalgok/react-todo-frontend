import React from 'react';
import './TodoItem.css';

function TodoItem(props){
  const {_id, name, completed} = props.todo;

  return (
    <li id={_id} style={{textDecoration: completed ? 'line-through' : 'none'}}>
      {name}
    </li>
  )
}

export default TodoItem;