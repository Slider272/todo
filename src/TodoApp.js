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
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
    this.onSortRows = this.onSortRows.bind(this);
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

  onSortRows() {
//    this.state.items.sort(() => {

//    })

  }

  handleDeleteRow() {
    const selected = this.refs.todo.state.selected;
    if (selected.length === 0) return;
    let items;
    if (selected === 'all') {
      items = [];
    } else {
      items = this.state.items.filter((item, index) => {
      return (selected.indexOf(index) < 0) ? true : false;
      });

    }
    this.setState({
      items,
    });
    localStorage.setItem('items', JSON.stringify(items));
    this.refs.todo.setState({
      selected: [],
    });
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
      isComplited: false,
    });

    this.refs.titles.setState({
      text: '',
    });
    this.refs.task.setState({
      text: '',
    });

    console.log(newItem);
  }

  render() {
      return (
        <div>
          <div className='form'>
            <TitleInput
              ref='titles'
              text={this.state.titles}
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
            onDeleteRow={this.handleDeleteRow}
            ref='todo'
          />
        </div>
      );
    }
}

export default TodoApp;
