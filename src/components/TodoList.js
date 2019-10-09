import React from 'react'
import TodoListItem from './item'
// import '../App.css'

export default class TodoList extends React.Component {
    render () {
      var items = this.props.items.map((item, index) => {
        return (
          <TodoListItem 
            key={index} 
            item={item} 
            index={index} 
            removeItem={this.props.removeItem} 
            markTodoDone={this.props.markTodoDone} 
            updateItem={this.props.updateItem}
          />
        );
      });
      return (
        <ul className="list-group"> {items} </ul>
      );
    }
  }