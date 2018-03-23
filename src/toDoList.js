import React, { Component } from 'react';
import TitleInput from './Components/TitleInput';
import TaskInput from './Components/TaskInput';
import Toggle from 'material-ui/Toggle';

class TodoList extends Component {

  render() {
    return (
      <div className='todo'>
        {this.props.items.map(item => (
          <div
            key={item.id}
          >
            <TitleInput
              readOnly={true}
              text={item.titles}
            />
            <TaskInput
              text={item.task}
              readOnly={true}
            />
            <Toggle
              toggled={item.isComplited}
              readOnly={true}
            />
         </div>
        ))}
      </div>
    );
  }
}

export default TodoList;