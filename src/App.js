import React from 'react';
import { user } from './data/user'
import _ from 'lodash';
import 'bulma/css/bulma.css';
import TodoHeader from './components/TodoHeader';
import './App.css';
import TodoList from './components/TodoList';
import Button from './components/button';
import CssFlex from './components/CssFlex';

const showUsers = () => {
  var usrOrderd = user;
  usrOrderd = _.orderBy(usrOrderd, ['name'], ['asc']);
  return (
    usrOrderd.map((item, index) => <div key={index} className="answer">
      {item.name} want to buy {item.cars.map((car, index) => {
        return index < item.cars.length - 1 ? `${car}, ` : car;
      })}
    </div>)
  );
}

const findUniq = (arr) => {
  const countNumber = {};
  arr.map(item => {
    if (item in countNumber) {
      countNumber[item] += 1;
    } else {
      countNumber[item] = 1;
    }
  });
  const answer = Object.keys(countNumber).filter(item => countNumber[item] === 1);
  return answer;
}

const toCamelCase = (arr) => {
  var newarr = _.camelCase(arr);
  newarr = newarr[0].toUpperCase() + newarr.slice(1);
  return newarr;
}

var todoItems = [
  { index: 1, value: "Buy KitKat", done: false },
  { index: 2, value: "Go to Senna Labs at 2 P.M.", done: false },
  { index: 3, value: "Workout at 5 P.M.", done: false },
  { index: 4, value: "Give a flower to June", done: false }
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: todoItems, camelInput: '' };
  }
  addItem = (todoItem) => {
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({ todoItems: todoItems });
  }
  removeItem = (itemIndex) => {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }
  updateItem = (index, todoItem) => {
    todoItems[index].value = todoItem;
    this.setState({ todoItems: todoItems });
  }
  markTodoDone = (itemIndex) => {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  }
  _handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const camelCase = toCamelCase(this.refs.camelText.value);
      this.setState({ camelInput: camelCase })
    }
  }
  render() {
    return (
      <div id="main">
        <section className="section">
          <h1 className="question">
            Question #1 - Warm up
          </h1>
          {showUsers()}
        </section>
        <section className="section">
          <h1 className="question">
            Question #2 - Junior Level
          </h1>
          <h1 className="question">
            Create TODO app that include features Add, Edit, Delete, Mark done
          </h1>
          <div className="answer">
            ***Notice***
          </div>
          <div className="answer">
            1. Insert your new task on `input` and press `Enter`
          </div>
          <div className="answer">
            2. You can edit task by click on `text`
          </div>
          <div className="answer">
            2. You mask as done or undone task by click on `checkbox`
          </div>
          <TodoHeader addItem={this.addItem} />
          <TodoList
            items={this.state.todoItems}
            removeItem={this.removeItem}
            markTodoDone={this.markTodoDone}
            updateItem={this.updateItem}
          />
        </section>

        <section className="section">
          <h1 className="question">
            Question #3 - Junior Level
          </h1>
          <h1 className="question">
            There is an array with some numbers. All numbers are equal except for one. Try to find it! Using Javascript write a function that returns the unique number inside the array.
          </h1>
          <div className="answer">
            - Input: [1,1,1,2,1,1]    Output: {findUniq([1, 1, 1, 2, 1, 1])}
          </div>
          <div className="answer">
            - Input: [0,0,0.55,0,0,0]    Output: {findUniq([0, 0, 0.55, 0, 0, 0])}
          </div>
        </section>

        <section className="section">
          <h1 className="question">
            Question #4 - Junior Level
          </h1>
          <h1 className="question">
            What are the benefits of using ​spread syntax​ and how is it different from ​rest syntax​?
          </h1>
          <h1 className="answer">
            - we can update value in object only specific key and copy all elements in object with spread syntax.
          </h1>
          <h1 className="answer">
            - spread syntax is used expands an array into its elements, while rest syntax collects multiple elements and condenses them into a single element
          </h1>
        </section>

        <section className="section">
          <h1 className="question">
            Question #5 - Junior Level
          </h1>
          <h1 className="question">
            1. What is semantic HTML?
          </h1>
          <h1 className="answer">
            - It introduces meaning to contents on web page, For example, a {'\`<p/>\`'} indicates that the enclosed text is a paragraph
          </h1>
          <h1 className="question">
            2. Why you would like to use semantic tag?
          </h1>
          <h1 className="answer">
            - It will help to classifie content on page. Seach Engine will be better understand the purpose of the page.
          </h1>
        </section>

        <section className="section">
          <h1 className="question">
            Question #1 - Middle Level
          </h1>
          <h1 className="question">
            Using ​CSS Grid​ and/or ​CSS Flexbox​, write the HTML/CSS to create the below UI. You can use online editor such as Code Pen ​https://codepen.io​or JSFiddle ​https://jsfiddle.net/​and then sure the link of your work with us.
          </h1>
          <CssFlex />
        </section>

        <section className="section">
          <h1 className="question">
            Question #2 - Middle Level
          </h1>
          <h1 className="question">
            Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.
          </h1>

          <div className="columns" style={{ display: 'flex', alignItems: "center" }}>
            <div className="column is-one-fifth " style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h1 className="is-size-4">Enter Word: </h1>
            </div>
            <div className="column is-three-fifths">
              <div className="field">
                <div className="control">
                  <input className="input"
                    type="text"
                    ref="camelText"
                    placeholder="add a word..."
                    onKeyDown={this._handleKeyDown}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="answer">
            Output: {this.state.camelInput}
          </div>

        </section>

        <section className="section">
          <h1 className="type">
            FrontendReactJS Questions
          </h1>
        </section>

        <section className="section">
          <h1 className="question">
            Question #1 - Junior Level
          </h1>
          <h1 className="question">
            1. How to apply validation on props in React?
          </h1>
          <h1 className="answer">
            - import PropType from props-type. define type of props in `PropType`
          </h1>
          <h1 className="question">
            2. What are Higher-Order Components?
          </h1>
          <h1 className="answer">
            - Higher-Order Components is a component where collect frequent used logic (Reusing Component Logic).
          </h1>
        </section>

        <section className="section">
          <h1 className="question">
            Question #2 - Junior Level
          </h1>
          <h1 className="question">
            Using ReactJS write component to create the below button. You can use JSFiddle https://jsfiddle.net/​and then sure the link of your work with us.
          </h1>
          <Button />
        </section>
      </div>
    );
  }
}

export default TodoApp
