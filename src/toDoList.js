import React, { Component } from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableBody,
  TableRowColumn,
  Checkbox
} from 'material-ui';

class TodoList extends Component {

  render() {
    return (
      <div className='todo'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>
                Title
              </TableHeaderColumn>
              <TableHeaderColumn>
                Task
              </TableHeaderColumn>
              <TableHeaderColumn>
                Complited
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          {this.props.items.map(item => (
            <TableRow key={item.id}>
              <TableRowColumn>
                {item.titles}
              </TableRowColumn>
              <TableRowColumn>
                {item.task}
              </TableRowColumn>
              <TableRowColumn>
                <Checkbox
                  checked={item.isComplited}
                  disabled={true}
                />
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    );
  }
}

export default TodoList;