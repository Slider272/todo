import React, { Component } from 'react';
import TodoList from './toDoList';
import TitleInput from './Components/TitleInput';
import TaskInput from './Components/TaskInput';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isComplited: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, newValue) {
    this.setState({ isComplited: newValue });
  }

  componentWillMount(){
    const items = JSON.parse(localStorage.getItem('items'));
    console.log(items);
    if (items) {
      this.setState({
        items,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const titles = this.refs.titles.state.text;
    const task = this.refs.task.state.text;
    const isComplited = this.state.isComplited;
    if (!titles.length) {
      return;
    }

    const newItem = this.state.items.concat({
      titles,
      task,
      isComplited,
      id: Date.now(),
    });

    localStorage.setItem('items', JSON.stringify(newItem));

    this.setState({
      items: newItem,
      titles: '',
      task: '',
      isComplited: false,
    });
console.log(newItem);
  }

  render() {
      return (
        <div>
          <div className='form'>
            <TitleInput
              ref='titles'
            />
            <TaskInput
              ref='task'
            />
            <div>
            <Toggle
              label='Complited'
              id="new-complited"
              onToggle={this.handleChange}
              toggled={this.state.isComplited}
              style={{
                width: '133px',
                margin: '30px 10px 10px 10px',
              }}
            />
            <RaisedButton
              label='Add the task'
              primary={true}
              style={{
                  marginLeft: '10px',
                  height: '20px',
              }}
              onClick={this.handleSubmit}
            />
            </div>
          </div>
          <TodoList
            items={this.state.items}
          />
        </div>
      );
    }
}

export default TodoApp;
