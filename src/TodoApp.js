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
      sort: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
    this.handleSortRows = this.handleSortRows.bind(this);
    this.setItems = this.setItems.bind(this);
    this.getItems = this.getItems.bind(this);
    this.handleChangeItems = this.handleChangeItems.bind(this);
  }

  handleChangeItems(name, id, event, newValue) {
    let items = this.state.items;
    items = items.map((el) => {
      return (el.id === id) ? ({
          titles: (name === 'titles') ? newValue : el.titles,
          task: (name === 'task') ? newValue : el.task,
          isComplited: (name === 'isComplited') ? newValue : el.isComplited,
          id: el.id,
      }) : ({
        titles: el.titles,
        task: el.task,
        isComplited: el.isComplited,
        id: el.id,
      });
    });
    this.setState({
      items
    });
    this.setItems(items);
  }

  handleChange(e, newValue) {
    this.setState({ isComplited: newValue });
  }

  setItems(obj){
    try {
      localStorage.setItem('items', JSON.stringify(obj));
    } catch (e) {
      if (e !== '') {
        alert('Error Save LocalStorage');
      }
    }
  }

  getItems (){
    return JSON.parse(localStorage.getItem('items'));
  }

  componentWillMount(){
    this.setState({
      items: this.getItems(),
    });
  }

  componentDidMount() {
    if (this.state.items) this.handleSortRows();
  }

  handleSortRows() {
    const items = this.state.items;
    items.sort((item, itemNext) => {
      if (item['titles'] > itemNext['titles']) return this.state.sort;
      else if (item['titles'] < itemNext['titles']) return -this.state.sort;
      else return 0;
    })
    this.setState({
      items,
      sort: -this.state.sort,
    });
    this.setItems(items);
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
    this.setItems(items);
    this.refs.todo.setState({
      selected: [],
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const titles = this.refs.titles.state.text;
    const task = this.refs.task.state.text;
    const isComplited = this.state.isComplited;
    let items = this.state.items;
    if (!titles.length) {
      return;
    }

    let newItem;
    if (!items) items = [];
    newItem = items.concat({
      titles,
      task,
      isComplited,
      id: Date.now(),
    });

    this.setItems(newItem);

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
              label='Completed'
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
            onSortRows={this.handleSortRows}
            onChangeItems={this.handleChangeItems}
            // onChangeTask={this.handleChangeTask}
            // onChangeComplited={this.handleChangeComplited}
            ref='todo'
          />
        </div>
      );
    }
}

export default TodoApp;
